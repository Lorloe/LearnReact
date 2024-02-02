import React, { useState } from "react";
import "./styles.css";

const Search = () => {
  const [Text, SetText] = useState("");
  const HandleChange = (event) => {
    //console.log(event.target.value);
    SetText(event.target.value);
  };
  const DeleteText = () => {
    SetText("");
  };
  return (
    <div className="search-wrapper">
      <span className="user-input" style={{ padding: "0px 10px" }}>
        <input
          placeholder="Tìm Kiếm"
          value={Text}
          onChange={HandleChange}
        ></input>
        {
            Text.length > 1 && <i className="fa-solid fa-circle-xmark" onClick={DeleteText}></i>
        }
      </span>
      <span className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
    </div>
  );
};

export default Search;
