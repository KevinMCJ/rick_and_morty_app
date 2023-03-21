export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={(id) => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
