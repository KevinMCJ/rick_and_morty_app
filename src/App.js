import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      const URL_BASE = "https://rickandmortyapi.com/api";

      fetch(`${URL_BASE}/character/${id}`)
         .then((response) => response.json())
         .then((data) => {//Para que no aparezcan repetidos aunque si clickeo rapido esto se rompe por que las request.
            if (data.name && !characters.find((character) => character.id === data.id)) {
               setCharacters([...characters, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((character) => character.id !== id));
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
