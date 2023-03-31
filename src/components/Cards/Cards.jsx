import Card from '../Card/Card';

export default function Cards({characters, onClose}) {
   return(
   <div>
      {characters.map((character) => {
         return (
            <Card
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={onClose}
            />
         );
      })}
   </div>
   );
}
