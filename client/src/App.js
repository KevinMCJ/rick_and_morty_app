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

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const EMAIL = "kevin@gmail.com";
  const PASSWORD = "pepito123";

  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty";
    const foundCharacter = characters.find((character) => character.id == id);

    if (foundCharacter) {
      alert("¡Este personaje ya se encuentra en la lista!");
    } else {
      // Si el personaje no existe, hacemos la petición y lo agregamos a la lista de personajes
      fetch(`${URL_BASE}/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters([...characters, data]);
          } else {
            alert("¡No hay personajes con este ID!");
          }
        });
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    //Si no tiene acceso , redirigira siempre al usuario al form [ruta default] => if(!access) navigate("/")
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
