import { useState } from "react";
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
      </form>
    </section>
  );
};

export default Form;
