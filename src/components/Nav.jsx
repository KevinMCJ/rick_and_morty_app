import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = (props) => {
    const idAleatorio = Math.floor(Math.random() * 826) + 1; //Id generado aleatoriamente del 1-826

    return (
        <div>
            <SearchBar onSearch={props.onSearch} />
            <button onClick={()=> props.onSearch(idAleatorio)}>Agregar personaje aleatorio</button>
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    );
}

export default Nav;