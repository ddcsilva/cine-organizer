import "./Genre.css";
import Movie from "../Movie";

const Genre = (props) => {
  const backgroundColor = { backgroundColor: props.secondaryColor };
  const borderColor = { borderColor: props.primaryColor };

  return (
    props.movies.length > 0 && (
      <section className="genre" style={backgroundColor}>
        <h3 style={borderColor}>{props.name}</h3>
        <div className="movies">
          {props.movies.map((movie, index) => (
            <Movie
              backgroundColor={props.primaryColor}
              key={index}
              title={movie.title}
              director={movie.director}
              poster={movie.poster}
              genre={props.name}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Genre;
