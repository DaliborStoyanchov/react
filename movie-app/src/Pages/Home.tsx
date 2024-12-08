import MovieCard from "../Components/MovieCard";

const Home = () => {
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
  ];

  return (
    <div>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
