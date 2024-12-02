import "./MovieCard.css";

type MovieProps = {
  title: string;
  url: string;
  year: string;
};

const MovieCard = ({ title, url, year }: MovieProps) => {
  const handleFavoriteClick = () => {
    console.log("FAVORITE CLICK");
  };

  return (
    <div className="MovieCard">
      <div className="movie-poster">
        <img src={url} alt={title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleFavoriteClick}>
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
