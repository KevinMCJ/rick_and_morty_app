import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards, removeFav } from "../../../redux/actions";
import React, { useState } from "react";
import Cards from "../../Cards/Cards";
import style from "./Favorites.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.filteredFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    aux ? setAux(false) : setAux(true); //Forzado de render
  };

  const removeFavorite = (id) => {
    dispatch(removeFav(id));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <section className={style.container}>
      <div className={style.filter_sort_container}>
        <select name="orderBy" id="orderBy" onChange={handleOrder}>
          <option value="order" disabled>
            Order By
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filterBy" id="filterBy" onChange={handleFilter}>
          <option value="filter" disabled>
            Filter By
          </option>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {!favorites.length ? (
        <h3 className={style.title}>Universo vació...</h3>
      ) : (
        <Cards characters={favorites} onClose={removeFavorite} />
      )}
    </section>
  );
};

export default Favorites;
