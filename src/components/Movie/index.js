import "./Movie.css";

const Movie = (props) => {
  return (
    <div className="movie">
      <div className="header" style={{ backgroundColor: props.backgroundColor }}>
        <img src={props.poster || "/images/default-poster.png"} alt={props.title} />
      </div>
      <div className="movie-info">
        <h4>{props.title}</h4>
        <h5>Diretor: {props.director}</h5>
      </div>
    </div>
  );
};

export default Movie;
