import "./Movie.css";

const Movie = (props) => {
  // Função para gerar poster padrão baseado no gênero
  const getDefaultPoster = (genre) => {
    const posterMap = {
      Ação: "🎬",
      Comédia: "😄",
      Drama: "🎭",
      Terror: "👻",
      "Ficção Científica": "🚀",
      Romance: "💕",
      Documentário: "📽️",
    };

    return posterMap[genre] || "🎬";
  };

  // Se não tem poster, usa o emoji padrão do gênero
  const posterContent = props.poster ? (
    <img src={props.poster} alt={props.title} />
  ) : (
    <div className="default-poster">
      <span className="poster-emoji">{getDefaultPoster(props.genre)}</span>
      <span className="poster-text">{props.genre}</span>
    </div>
  );

  return (
    <div className="movie">
      <div className="header" style={{ backgroundColor: props.backgroundColor }}>
        {posterContent}
      </div>
      <div className="movie-info">
        <h4>{props.title}</h4>
        <h5>Diretor: {props.director}</h5>
      </div>
    </div>
  );
};

export default Movie;
