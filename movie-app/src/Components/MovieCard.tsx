import classes from "../css/MovieCard.module.css";

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
    <div className={classes.movieCard}>
      <div className={classes.moviePoster}>
        <img src={props.url} alt={props.title} />
        <div className={classes.movieOverlay}>
          <button className={classes.favoriteBtn} onClick={handleFavoriteClick}>
            🤍
          </button>
        </div>
      </div>
      <div className={classes.movieInfo}>
        <h3>{props.title}</h3>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
