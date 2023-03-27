import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div>
         <button onClick={() => props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>Name: {props.name}</h2>
         </Link>
         <h2>Status: {props.status}</h2>
         <h2>Species: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Origin: {props.origin}</h2>
         <img src={props.image} alt=''/>
      </div>
   );
}
