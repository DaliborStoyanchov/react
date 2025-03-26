import { useState } from "react";
import { FaStar } from "react-icons/fa";

import classes from "./StarRating.module.css";

type StarRatingProps = {
  numberOfStars: number;
};

export default function StarRating({ numberOfStars }: StarRatingProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex: number) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex: number) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <>
      <h2 className="star-rating">
        {[...Array(numberOfStars)].map((_, i) => {
          i += 1;

          return (
            <FaStar
              key={i}
              className={
                i <= (hover || rating) ? classes.active : classes.inactive
              }
              onClick={() => handleClick(i)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave()}
              size={10}
            />
          );
        })}
      </h2>
    </>
  );
}
