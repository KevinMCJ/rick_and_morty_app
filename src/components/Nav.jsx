import React from "react";
import SearchBar from "./SearchBar";

const Nav = (props) => {
    const idAleatorio = Math.floor(Math.random() * 826) + 1; //Id generado aleatoriamente del 1-826

    return (
        <div>
            <SearchBar onSearch={props.onSearch} />
            <button onClick={()=> props.onSearch(idAleatorio)}>Agregar personaje aleatorio</button>
        </div>
    );
}

export default Nav;