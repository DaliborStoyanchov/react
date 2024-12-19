import React, { useState, useEffect } from "react";

import MovieCard from "../Components/MovieCard";
import classes from "../css/Home.module.css";
import { getPopularMovies, searchMovies } from "../services/api";
import NoMoviesFound from "./NoMoviesFound";
import Movie from "../interface/IMovie";

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
        console.log(popularMovies[0]);
        console.log(popularMovies[0].title);
        console.log(popularMovies[0].id);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  const moviesScreen =
    movies.length === 0 ? (
      <NoMoviesFound />
    ) : (
      <div className={classes.moviesGrid}>
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );

  return (
    <div className={classes.home}>
      <form onSubmit={handleSearch} className={classes.searchForm}>
        <input
          type="text"
          className={classes.searchInput}
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className={classes.searchButton}>
          Search
        </button>
      </form>

      {error && <div>{error}</div>}

      {loading ? <div>Loading...</div> : moviesScreen}
    </div>
  );
};

export default Home;
