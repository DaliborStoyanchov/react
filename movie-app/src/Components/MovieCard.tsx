import React from "react";
import classes from "../css/MovieCard.module.css";
import { useMovieContext } from "../contexts/MovieContext";
import "./MovieCard.css";

type MovieProps = {
  movie: {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
  };
};

const MovieCard = ({ movie }: MovieProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("FAVORITE CLICK");
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className={classes.movieCard}>
      <div className={classes.moviePoster}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={classes.movieOverlay}>
          <button
            className={`favoriteBtn ${favorite ? "active" : ""}`}
            onClick={handleFavoriteClick}
          >
            ♥
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
