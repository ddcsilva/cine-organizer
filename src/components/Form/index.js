import { useState } from "react";
import InputText from "../InputText";
import Dropdown from "../Dropdown";
import Button from "../Button";
import "./Form.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [poster, setPoster] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addMovie({
      title,
      director,
      poster,
      genre,
    });

    setTitle("");
    setDirector("");
    setPoster("");
    setGenre("");
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
        <InputText
          required={true}
          label="Diretor"
          placeholder="Digite o nome do diretor"
          value={director}
          onChange={(value) => setDirector(value)}
        />
        <InputText
          label="Poster"
          placeholder="Digite a URL do poster do filme"
          value={poster}
          onChange={(value) => setPoster(value)}
        />
        <Dropdown
          required={true}
          label="Gênero"
          items={props.genres}
          value={genre}
          onChange={(value) => setGenre(value)}
        />
        <Button>Adicionar Filme</Button>
      </form>
    </section>
  );
};

export default Form;
