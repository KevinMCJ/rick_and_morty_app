import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect} from "react";

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }else{
         setIsFav(true);
         addFav({
            id, name, status, species, gender, origin, image, onClose, addFav, removeFav
         });
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id) {
            setIsFav(true);
         }
      });
   },[myFavorites, id]);

   return (
      <div>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </Link>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image} alt={`Foto de ${name}`}/>
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   };
};

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
