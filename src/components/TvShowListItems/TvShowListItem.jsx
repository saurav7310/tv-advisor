import React from "react";
import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
const MAX_LENGTH = 20;
const TvShowListItem = ({ tvShow, onclick }) => {
  const onClick_ = () => {
    onclick(tvShow);
  };
  return (
    <div onClick={onClick_} className={s.container}>
      <img
        className={s.img}
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_LENGTH
          ? tvShow.name.slice(0, MAX_LENGTH) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};

export default TvShowListItem;
