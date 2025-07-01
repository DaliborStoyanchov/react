import { useEffect, useState } from "react";

import { MoonLoader } from "react-spinners";
import ProductTile from "../components/product-tile";

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

  return (
    <div>
      {isLoading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <MoonLoader />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile product={productItem} key={productItem.id} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
