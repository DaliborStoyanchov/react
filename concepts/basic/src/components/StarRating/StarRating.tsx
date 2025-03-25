import { useState } from "react";
import { FaStar } from "react-icons/fa";

type StarRatingProps = {
  numberOfStars: number;
};

export default function StarRating({ numberOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {}

  function handleMouseEnter() {}

  function handleMouseLeave() {}

  return (
    <>
      <h2 className="star-rating">
        {[...Array(numberOfStars)].map((_, i) => {
          return (
            <FaStar
              key={i}
              onClick={}
              onMouseEnter={}
              onMouseLeave={}
              size={}
            />
          );
        })}
      </h2>
    </>
  );
}
