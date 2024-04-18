import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
  }

    function handleMouseEnter(getCurrentIndex) {
        console.log(getCurrentIndex);

  }

    function handleMouseLeave(getCurrentIndex) {
        console.log(getCurrentIndex);

  }

  return (
    <div className="start-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1
        return <FaStar key={index} />;
        onlick = {()=>handleClick(index)};
        onmouseenter = {()=>handleMouseEnter(index)};
        onmouseleave = {()=>handleMouseLeave(index)};
        size =  {40}
      })}
    </div>
  );
}
