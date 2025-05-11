import { useRef } from "react";
import useFetch from "../use-fetch/useFetch";

const ScrollToBottomAndTop = () => {
  const { data, error, isLoading } = useFetch(
    `https://dummyjson.com/products?limit=100`,
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  if (error) return <h1>Error occurred, please try again...</h1>;

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Scroll To Top and Button</h1>
      <h3>Top Section</h3>
      <button onClick={handleScrollToBottom}>Scroll to the bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((listItem) => (
              <li key={listItem.title}>{listItem.title}</li>
            ))
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to the top</button>
      <h3 ref={bottomRef}>Bottom of the page</h3>
    </div>
  );
};

export default ScrollToBottomAndTop;
