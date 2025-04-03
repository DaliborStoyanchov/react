import { useEffect, useState } from "react";
import styles from "./LoadMore.module.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

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
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (error) {
      console.log("DAC:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

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
      <div className={styles.loadMoreContainer}>
        <div className={styles.productsContainer}>
          {products && products.length
            ? products.map((item) => (
                <div key={item.id} className={styles.product}>
                  <img src={item.thumbnail} alt={item.title} width="150px" />
                  <p>{item.title}</p>
                </div>
              ))
            : null}
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={() => setCount(count + 1)} disabled={disableButton}>
            Load More Products
          </button>
          {disableButton ? (
            <p>You have reached the limit of 100 products</p>
          ) : null}
        </div>
      </div>
    </>
  );
}
