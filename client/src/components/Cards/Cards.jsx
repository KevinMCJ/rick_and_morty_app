import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useState } from "react";

const CARDS_PER_PAGE = 6;

export default function Cards({ characters, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { pathname } = useLocation();

  const totalPages = Math.ceil(characters.length / CARDS_PER_PAGE);

  const noCardsMessage = () => {
    if (pathname === "/home") {
      return (
        <p className={style.empty_paragraph}>
          No hay tarjetas en este universo...
        </p>
      );
    } else if (pathname === "/favorites") {
      return <p className={style.empty_paragraph}>No hay favoritos</p>;
    }
  };

  const getCardsForCurrentPage = (allCards) => {
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const endIndex = startIndex + CARDS_PER_PAGE;
    return allCards.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section
      className={`${style.section} ${!characters.length ? style.empty : ""}`}
    >
      {characters.length ? (
        <React.Fragment>
          <div className={style.pagination}>
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber + 1)}
                className={style.btnPage}
              >
                {pageNumber + 1}
              </button>
            ))}
          </div>
          <div className={style.container}>
            {getCardsForCurrentPage(characters).map((character) => (
              <Card
                key={character.id}
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                origin={character.origin}
                image={character.image}
                onClose={onClose}
              />
            ))}
          </div>
        </React.Fragment>
      ) : (
        <>{noCardsMessage()}</>
      )}
    </section>
  );
}
