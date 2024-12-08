import "./MovieCard.css";

type MovieProps = {
  id: string;
  title: string;
  url: string;
  year: string;
};

const MovieCard = (props: MovieProps) => {
  const handleFavoriteClick = () => {
    console.log("FAVORITE CLICK");
  };

  return (
    <div className="MovieCard">
      <div className="movie-poster">
        <img src={props.url} alt={props.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleFavoriteClick}>
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{props.title}</h3>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
