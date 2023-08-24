import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = (props) => {
  const { pathname } = useLocation();
  return (
    <nav className={style.nav}>
      <ul className={style.link_list}>
        <li>
          <Link to="/home" className={style.linkBtn}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/favorites" className={style.linkBtn}>
            Favorites
          </Link>
        </li>
      </ul>
      {pathname === "/home" && <SearchBar onSearch={props.onSearch} />}
      <button onClick={props.logout} className={style.btnLogout}>
        Log out
      </button>
    </nav>
  );
};

export default Nav;
