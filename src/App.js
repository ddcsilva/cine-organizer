import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Genre from "./components/Genre";
import Footer from "./components/Footer";

function App() {
  const genres = [
    {
      name: "Ação",
      primaryColor: "#ff6b6b",
      secondaryColor: "#ffe3e3",
    },
    {
      name: "Comédia",
      primaryColor: "#4ecdc4",
      secondaryColor: "#e8fffe",
    },
    {
      name: "Drama",
      primaryColor: "#45b7d1",
      secondaryColor: "#e6f7ff",
    },
    {
      name: "Terror",
      primaryColor: "#96ceb4",
      secondaryColor: "#f0fff4",
    },
    {
      name: "Ficção Científica",
      primaryColor: "#feca57",
      secondaryColor: "#fff9e6",
    },
    {
      name: "Romance",
      primaryColor: "#ff9ff3",
      secondaryColor: "#fef7ff",
    },
    {
      name: "Documentário",
      primaryColor: "#54a0ff",
      secondaryColor: "#e8f4ff",
    },
  ];

  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <Banner />
      <Form genres={genres.map((genre) => genre.name)} addMovie={addMovie} />
      {genres.map((genre) => (
        <Genre
          key={genre.name}
          name={genre.name}
          primaryColor={genre.primaryColor}
          secondaryColor={genre.secondaryColor}
          movies={movies.filter((movie) => movie.genre === genre.name)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
