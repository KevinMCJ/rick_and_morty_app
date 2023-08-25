import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import style from "./Card.module.css";
import { infoToast, successToast } from "../../utils/swal";

function Card({ id, name, status, species, gender, origin, image, onClose }) {
  const [isFav, setIsFav] = useState(false);
  const userId = useSelector((state) => state.userId);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      try {
        dispatch(
          addFav({
            id,
            name,
            status,
            species,
            gender,
            origin,
            image,
            userId,
          })
        );
        successToast("Añadido a favoritos");
      } catch (error) {
        if (error.message === "Ya existe el favorito en la lista") {
          infoToast("Ya agrego este personaje a favoritos");
        }
      }
    }
  };

  useEffect(() => {
    setIsFav(myFavorites.some((fav) => fav.id === id))
  }, [myFavorites, id]);

  return (
    <div className={style.card}>
      <div className={style.img_container}>
        <img src={image} alt={`Foto de ${name}`} className={style.img} />
        {isFav ? (
          <button onClick={handleFavorite} className={style.favBtn}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavorite} className={style.favBtn}>
            🤍
          </button>
        )}
      </div>
      <div className={style.character_data}>
        <Link to={`/detail/${id}`}>
          <h2 className={style.title}>{name}</h2>
        </Link>
        <div className={style.info}>
          <div className={style.info_box}>
            <h3>Status</h3>
            <p>{status}</p>
          </div>
          <div>
            <h3>Species</h3>
            <p>{species}</p>
          </div>
          <div>
            <h3>Gender</h3>
            <p>{gender}</p>
          </div>
          <div>
            <h3>Origin</h3>
            <p>{origin}</p>
          </div>
        </div>
        <button onClick={() => onClose(id)} className={style.deleteBtn}>
          X
        </button>
      </div>
    </div>
  );
}

export default Card;
