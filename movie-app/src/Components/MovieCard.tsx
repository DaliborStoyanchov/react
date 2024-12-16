import classes from "../css/MovieCard.module.css";

type MovieProps = {
  movie: {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
  };
};

const MovieCard = ({ movie }: MovieProps) => {
  const handleFavoriteClick = () => {
    console.log("FAVORITE CLICK");
  };

  return (
    <div className={classes.movieCard}>
      <div className={classes.moviePoster}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={classes.movieOverlay}>
          <button className={classes.favoriteBtn} onClick={handleFavoriteClick}>
            🤍
          </button>
        </div>
      </div>
      <div className={classes.movieInfo}>
        <h3>{movie.title}</h3>
        <p>{movie.release_date.slice(0, 4)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
