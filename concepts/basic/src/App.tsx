// import Accordion from "./components/Accordion/Accordion";
// import RandomColor from "./components/RandomColor/RandomColor";
// import StarRating from "./components/StarRating/StarRating";

import ImageSlider from "./components/ImageSlider/ImageSlider";

const App = () => {
  return (
    <>
      <main style={{}}>
        {/* <Accordion /> */}
        {/* <RandomColor /> */}
        {/* <StarRating numberOfStars={10} /> */}
        <ImageSlider url={"https://picsum.photos/v2"} limit={"5"} page={"1"} />
      </main>
    </>
  );
};

export default App;
