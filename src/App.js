import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/Views/About';
import Detail from './components/Views/Detail';
import Error from './components/Views/Error';
import Login from './components/Views/Login';

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
         <Routes>
            <Route path="/" element={<Login/>}/>

            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>

            <Route path="/about" element={<About/>}/>

            <Route path="/detail/:id" element={<Detail/>}/>

            <Route path="*" element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
