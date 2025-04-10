// import Accordion from "./components/Accordion/Accordion";
// import RandomColor from "./components/RandomColor/RandomColor";
// import StarRating from "./components/StarRating/StarRating";
// import ImageSlider from "./components/ImageSlider/ImageSlider";
// import menus from "./components/TreeView/data";
// import TreeView from "./components/TreeView/TreeView";

import QrCodeGen from "./components/QrCodeGen/QrCodeGen";

const App = () => {
  return (
    <>
      <main>
        {/* <Accordion /> */}
        {/* <RandomColor /> */}
        {/* <StarRating numberOfStars={10} /> */}
        {/* <ImageSlider url={"https://picsum.photos/v2"} limit={"5"} page={"1"} /> */}
        {/* <TreeView menus={menus} /> */}
        <QrCodeGen />
      </main>
    </>
  );
};

export default App;
