import React, { useState, useRef } from "react";
import UseOutsideClick from "./UseOutsideClick";

const UseOutsideClickTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div style={{ border: "1px solid gray", padding: "2rem" }} ref={ref}>
          <h1>Random Content</h1>
          <p>Please click outside to close these</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOutsideClickTest;
