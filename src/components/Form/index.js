import { useState, useEffect } from "react";
import InputText from "../InputText";
import Dropdown from "../Dropdown";
import Button from "../Button";
import "./Form.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [useCustomPoster, setUseCustomPoster] = useState(false);
  const [customPoster, setCustomPoster] = useState("");
  const [autoFoundPoster, setAutoFoundPoster] = useState("");
  const [isSearchingPoster, setIsSearchingPoster] = useState(false);

  // Função para buscar poster automaticamente
  const searchMoviePoster = async (movieTitle) => {
    if (!movieTitle.trim() || movieTitle.length < 3) {
      setAutoFoundPoster("");
      return;
    }

    setIsSearchingPoster(true);
    try {
      // Usando uma API key pública para demonstração - você pode usar a sua própria
      const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=4a3b711b`);
      const data = await response.json();

      if (data.Response === "True" && data.Poster && data.Poster !== "N/A") {
        setAutoFoundPoster(data.Poster);
      } else {
        setAutoFoundPoster("");
      }
    } catch (error) {
      console.log("Erro ao buscar poster:", error);
      setAutoFoundPoster("");
    } finally {
      setIsSearchingPoster(false);
    }
  };

  // Buscar poster automaticamente quando o título muda
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (title && !useCustomPoster) {
        searchMoviePoster(title);
      }
    }, 1000); // Aguarda 1 segundo após o usuário parar de digitar

    return () => clearTimeout(timeoutId);
  }, [title, useCustomPoster]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Determina qual poster usar: personalizado, encontrado automaticamente, ou padrão
    let posterToUse = null;
    if (useCustomPoster && customPoster) {
      posterToUse = customPoster;
    } else if (autoFoundPoster) {
      posterToUse = autoFoundPoster;
    }

    props.addMovie({
      title,
      director,
      genre,
      poster: posterToUse,
    });

    setTitle("");
    setDirector("");
    setGenre("");
    setUseCustomPoster(false);
    setCustomPoster("");
    setAutoFoundPoster("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para adicionar o filme</h2>

        <InputText
          required={true}
          label="Título do Filme"
          placeholder="Digite o título do filme"
          value={title}
          onChange={(value) => setTitle(value)}
        />

        {/* Indicador de busca automática */}
        {isSearchingPoster && <div className="poster-search-indicator">🔍 Buscando poster automaticamente...</div>}

        {/* Preview do poster encontrado */}
        {autoFoundPoster && !useCustomPoster && (
          <div className="auto-poster-preview">
            <span>✅ Poster encontrado automaticamente!</span>
            <img src={autoFoundPoster} alt="Preview do poster" className="poster-preview-img" />
          </div>
        )}

        <InputText
          required={true}
          label="Diretor"
          placeholder="Digite o nome do diretor"
          value={director}
          onChange={(value) => setDirector(value)}
        />

        <Dropdown
          required={true}
          label="Gênero"
          items={props.genres}
          value={genre}
          onChange={(value) => setGenre(value)}
        />

        <div className="poster-option">
          <label className="checkbox-label">
            <input type="checkbox" checked={useCustomPoster} onChange={(e) => setUseCustomPoster(e.target.checked)} />
            Usar poster personalizado (opcional)
          </label>
        </div>

        {useCustomPoster && (
          <InputText
            label="URL do Poster"
            placeholder="Digite a URL do poster do filme"
            value={customPoster}
            onChange={(value) => setCustomPoster(value)}
          />
        )}

        <Button>Adicionar Filme</Button>
      </form>
    </section>
  );
};

export default Form;
