import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const idAleatorio = Math.floor(Math.random() * 826) + 1; //Id generado aleatoriamente del 1-826

  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.container}>
      <input type="search" onChange={handleChange} value={id} />
      <button onClick={() => props.onSearch(id)}>Agregar</button>
      <button onClick={() => props.onSearch(idAleatorio)}>
        Agregar personaje aleatorio
      </button>
    </div>
  );
}
