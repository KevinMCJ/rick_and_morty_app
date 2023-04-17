import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/Views/About";
import Detail from "./components/Views/Detail";
import Error from "./components/Views/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Views/Favorites";
import axios from "axios";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const onSearch = async (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty";
    const foundCharacter = characters.some((character) => character.id === Number(id));

    // Si el personaje aún no ha sido agregado, realizamos la peticion y posteriormente lo añadimos a la lista de personajes.
    if (foundCharacter) {
      alert("¡Este personaje ya se encuentra en la lista!");
    } else {
      const response = await axios.get(`${URL_BASE}/character/${id}`);
      setCharacters([...characters, response.data]);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/"; 
    const { data } = await axios(URL + `?email=${email}&password=${password}`);
    
    const { access } = data;
    setAccess(access);
    access && navigate("/home");
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    // Si un usuario no está autorizado quiere acceder a cualquier ruta, se redigira al login.
    !access && navigate("/");
  }, [access]); //Escucha los cambios del estado access

  return (
    <div className="App">
      {/* Siempre y cuando no estemos posicionados en la ruta / , el componente Nav se mostrara */}
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
