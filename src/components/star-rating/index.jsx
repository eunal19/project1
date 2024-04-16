import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {
  return (
    <div className="start-rating">
      {[...Array(noOfStars)].map((_, index) => {
        return <FaStar key={index} />;
        onclick = {};
        onmouseenter = {};
        onmouseleave = {};
        size =  {40}
      })}
    </div>
  );
}
