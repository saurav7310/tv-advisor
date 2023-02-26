import React from "react";
import s from "./style.module.css";
import TvShowListItem from "../TvShowListItems/TvShowListItem";

const TvShowList = ({ tvShowList, updateCurrentTcShow }) => {
  return (
    <div>
      <div className={s.title}>You Might Like them!</div>
      <div className={s.list}>
        {tvShowList.map((data) => {
          return (
            <span className={s.tv_show_item} key={data.id}>
              {" "}
              <TvShowListItem tvShow={data} onclick={updateCurrentTcShow} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TvShowList;
