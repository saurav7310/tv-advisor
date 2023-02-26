import React, { useState } from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";
const SearchBar = ({ fetchByTitle }) => {
  const [data, setData] = useState("");
  const fetchData = (e) => {
    if (e.key === "Enter" && data.trim() !== "") {
      fetchByTitle(e.target.value);
      setData("");
    }
  };
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        onKeyUp={fetchData}
        className={s.input}
        type="text"
        placeholder={"Search a tv show you may like"}
      />
    </>
  );
};

export default SearchBar;
