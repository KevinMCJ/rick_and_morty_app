import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  //Renderizado condicional!
  return (
    <div>
      {character.name ? (
        <>
          <h1>{character.name}</h1>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin.name}</p>
          <img src={character.image} alt={`Foto de ${character.name}`} />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
