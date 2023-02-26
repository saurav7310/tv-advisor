import React from "react";
import s from "./style.module.css";
const Logo = ({ title, subtitle, img }) => {
  return (
    <>
      <div>
        <div className={s.container}>
          <img className={s.img} src={img} alt="LOGO" />
          <span className={s.title}>{title}</span>
        </div>
        <span className={s.subtitle}>{subtitle}</span>
      </div>
    </>
  );
};

export default Logo;
