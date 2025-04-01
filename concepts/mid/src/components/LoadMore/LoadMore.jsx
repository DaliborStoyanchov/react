import { useEffect, useState } from "react";
import styles from "./LoadMore.module.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(result.products);
        setLoading(false);
      }

      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading data! Please wait...</h1>
      </div>
    );
  }

  return (
    <>
      <h1>Load More</h1>
      <div className={styles.container}>
        <div className={styles.productsContainer}>
          {products && products.length
            ? products.map((item) => (
                <div key={item.id}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    width="20"
                    height="20"
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
