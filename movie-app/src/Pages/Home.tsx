import { useState } from "react";

import MovieCard from "../Components/MovieCard";
import classes from "../css/Home.module.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: "1",
      title: "Tenet",
      url: "https://preview.redd.it/tenet-was-released-4-years-ago-today-which-poster-is-your-v0-6g28lsf792ld1.jpg?width=1080&crop=smart&auto=webp&s=310a41bfea7f137e086d2a61e0d07669558c58c8",
      year: "2020",
    },
    {
      id: "2",
      title: "Titanic",
      url: "https://m.media-amazon.com/images/I/51nbDBJ2h3L._AC_.jpg",
      year: "1997",
    },
    {
      id: "3",
      title: "Encanto",
      url: "https://m.media-amazon.com/images/I/719lSGJnMxL._AC_SL1287_.jpg",
      year: "2021",
    },
    {
      id: "4",
      title: "Oblivion",
      url: "https://image.tmdb.org/t/p/original/eO3r38fwnhb58M1YgcjQBd3VNcp.jpg",
      year: "2013",
    },
    {
      id: "5",
      title: "Vanilla Sky",
      url: "https://m.media-amazon.com/images/I/51vJpudilhL._AC_.jpg",
      year: "2001",
    },
  ];

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
      <div className={classes.moviesGrid}>
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
              <MovieCard key={movie.id} {...movie} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
