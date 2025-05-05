import useFetch from "./useFetch";

const UseFetchHookTest = () => {
  const { data, error, isLoading } = useFetch(
    `https://dummyjson.com/products`,
    {}
  );

  return (
    <div>
      <h3>Use fetch hook</h3>
      {isLoading ? <h2>Loading...</h2> : null}
      {error ? <h2>{error}</h2> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
};

export default UseFetchHookTest;
