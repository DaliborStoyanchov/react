const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const getPopularMovies = async () => {
  const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}`);

  const data = await response.json();

  return data.results;
};

export const searchMovies = async (query: string) => {
  const response = await fetch(
    `${apiUrl}/search/movie?api_key=${apiKey}&query${encodeURIComponent(query)}`
  );

  const data = await response.json();

  return data.results;
};
