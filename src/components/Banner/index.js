import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner-content">
        <h1>🎬 CineOrganizer</h1>
        <p>Organize seus filmes favoritos por gênero</p>
        <div className="cinema-icons">
          <span>🍿</span>
          <span>🎭</span>
          <span>🎞️</span>
          <span>⭐</span>
        </div>
      </div>
    </header>
  );
};

export default Banner;
