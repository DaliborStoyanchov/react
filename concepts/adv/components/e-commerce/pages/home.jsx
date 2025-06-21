import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchListOfProducts = async () => {
    setIsLoading(true);

    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (data) {
      setIsLoading(false);
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  if (isLoading) {
    <h2>Loading...</h2>;
  }

  return (
    <div>
      {products.map((i) => (
        <p>{i.title}</p>
      ))}
    </div>
  );
}
