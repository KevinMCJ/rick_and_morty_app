import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div className={style.nav}>
      <Link to="/about">
        <button className={style.linkBtn}>About</button>
      </Link>
      <Link to="/home">
        <button className={style.linkBtn}>Home</button>
      </Link>
      <Link to="/favorites">
        <button className={style.linkBtn}>Favorites</button>
      </Link>
      <SearchBar onSearch={props.onSearch} />
      <button onClick={props.logout}>Log out</button>
    </div>
  );
};

export default Nav;
