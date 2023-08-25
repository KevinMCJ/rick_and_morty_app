import React, { useEffect } from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const CARDS_PER_PAGE = 6;

export default function Cards({ characters, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const {pathname} = useLocation();

  const totalPages = Math.ceil(characters.length / CARDS_PER_PAGE);

  const getCardsForCurrentPage = (allCards) => {
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const endIndex = startIndex + CARDS_PER_PAGE;
    return allCards.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // * Cambia la pagina a la ultima o anterior si deja de existir o hay una pagina nueva.
    setCurrentPage(totalPages);
  }, [totalPages]);

  return (
    <section
      className={`${style.section} ${!characters.length ? style.empty : ""} ${pathname === "/home" && style.paddingContainer}`}
    >
      {characters.length ? (
        <div className={style.wrapper}>
          <div className={style.pagination}>
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber + 1)}
                className={`${style.btnPage} ${currentPage === pageNumber ? style.activeBtn : ""}`}
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
        </div>
      ) : (
        <p className={style.empty_paragraph}>
          No characters in this universe...
        </p>
      )}
    </section>
  );
}
