import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useState } from "react";

const CARDS_PER_PAGE = 8;

export default function Cards({ characters, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(characters.length / CARDS_PER_PAGE);

  //Toma todas las cartas y divide de 8 en 8 para crear una pagination.
  const getCardsForCurrentPage = (allCards) => {
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const endIndex = startIndex + CARDS_PER_PAGE;
    return allCards.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={style.pagination}>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
      <div className={style.container}>
        {getCardsForCurrentPage(characters).map((character) => {
          return (
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
          );
        })}
      </div>
    </>
  );
}
