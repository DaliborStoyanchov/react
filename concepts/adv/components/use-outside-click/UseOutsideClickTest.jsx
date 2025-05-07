import React, { useState } from "react";

const UseOutsideClickTest = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {showContent ? (
        <div>
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
