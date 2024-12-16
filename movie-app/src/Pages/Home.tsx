import { useState, useEffect } from "react";

import MovieCard from "../Components/MovieCard";
import classes from "../css/Home.module.css";
import { getPopularMovies } from "../services/api";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
};

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();

        setMovies(popularMovies);
      } catch (error) {
        console.error("ERROR MSG: ", error);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search: ", searchQuery);
  };

  return (
    <div className={classes.home}>
      <form onSubmit={handleSearch} className={classes.searchForm}>
        <input
          type="text"
          className={classes.searchInput}
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className={classes.searchButton}>
          Search
        </button>
      </form>

      {error && <div>{error}</div>}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={classes.moviesGrid}>
          {movies.map(
            (movie: Movie) =>
              movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
                <MovieCard key={movie.id} movie={movie} />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
