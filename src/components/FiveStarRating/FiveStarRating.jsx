import React from "react";
import { StarFill, StarHalf, Star as EmptyStar } from "react-bootstrap-icons";
const FiveStarRating = ({ rating }) => {
  const starList = [];
  const starFiLLCount = Math.floor(rating);
  const hasHalfCount = rating - parseInt(rating) > 0.5;
  const emptyStarCount = 5 - starFiLLCount - (hasHalfCount ? 1 : 0);

  for (let i = 1; i <= starFiLLCount; i++) {
    starList.push(<StarFill key={"starFill" + i} />);
  }
  if (hasHalfCount) {
    starList.push(<StarHalf key={"starHalf"} />);
  }
  for (let i = 0; i <= emptyStarCount; i++) {
    starList.push(<EmptyStar key={"emptyStar" + i} />);
  }

  return <div>{starList}</div>;
};

export default FiveStarRating;
