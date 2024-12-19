import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import Movie from "../interface/IMovie";

type MovieContextType = {
  favorites: Movie[];
  addFavorite: (favorite: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const defaultValue: MovieContextType = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
};

const MovieContext = createContext<MovieContextType>(defaultValue);

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  const addFavorite = (favorite: Movie) => {
    setFavorites((prev) => [...prev, favorite]);
  };

  const removeFavorite = (movieId: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId: number) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  return (
    <MovieContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </MovieContext.Provider>
  );
};
