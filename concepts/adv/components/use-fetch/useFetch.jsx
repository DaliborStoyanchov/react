import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setIsLoading(true);

      const response = await fetch(url, { ...options });

      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();

      setData(result);

      setError(null);

      setIsLoading(false);
    } catch (error) {
      console.log(`ERROR OCCURRED: ${error}.`);

      setError(`ERROR OCCURRED: ${error}.`);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, isLoading };
}
