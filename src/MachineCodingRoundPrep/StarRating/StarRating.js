import React, { useState } from "react";
import "./StarRating.css";
function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(e) {
    setRating(e.target.dataset.index);
  }
  function handleMouseOver(e) {
    setHover(e.target.dataset.index);
  }
  function handleMouseLeave() {
    setHover(0);
  }
  return (
    <div className="container">
      <div className="heading">StarRating</div>
      <div
        className="starList"
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {[1, 2, 3, 4, 5].map((ele, index) => {
          const starCss = hover
            ? index <= hover
              ? "starSelected"
              : "star"
            : index <= rating
            ? "starSelected"
            : "star";
          return (
            <span className={starCss} key={index} data-index={index}>
              &#9733;
            </span>
          );
        })}
      </div>
      <div className="Rating">Rating : {rating}</div>
    </div>
  );
}

export default StarRating;
