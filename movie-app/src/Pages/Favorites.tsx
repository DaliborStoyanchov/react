import classes from "../css/Favorites.module.css";
import styles from "../css/Home.module.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../Components/MovieCard";
import Movie from "../interface/IMovie";

const Favorites = () => {
  const { favorites } = useMovieContext();

  console.log(favorites);

  if (favorites.length > 0) {
    return (
      <div>
        <h2 className={classes.favorites}>Your Favorite Movies</h2>
        <div className={styles.moviesGrid}>
          {favorites.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={classes.favoritesEmpty}>
      <h2>No favorite movies yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
};

export default Favorites;
