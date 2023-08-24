import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Views/Detail";
import Error from "./components/Views/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Views/Favorites/Favorites";
import axios from "axios";
import { getFavs, setUserId } from "./redux/actions";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer/Footer";
import { errorToast, infoModal, infoToast } from "./utils/swal";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const dispatch = useDispatch();

  const onSearch = async (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty";
    const foundCharacter = characters.some(
      (character) => character.id === Number(id)
    );

    // Si el personaje aún no ha sido agregado, realizamos la peticion y posteriormente lo añadimos a la lista de personajes.
    if (foundCharacter) {
      infoToast("¡Este personaje ya se encuentra en la lista!");
    } else {
      try {
        const response = await axios.get(`${URL_BASE}/character/${id}`);
        setCharacters([...characters, response.data]);
      } catch (error) {
        errorToast("ID Invalido");
      }
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login";
    
    try {
      const { data } = await axios.get(
        URL + `?email=${email}&password=${password}`
      );
      const { access, userId } = data;
      setAccess(access);
      navigate("/home");
      dispatch(setUserId(userId));
      dispatch(getFavs(userId)); // * Carga todos los favoritos que tenia guardado ese usuario.
    } catch (error) {
      infoModal("INGRESE", "EMAIL: rick@gmail.com<br><br>CONTRASEÑA: rickandmorty");
    }
  };

  const logout = () => {
    setAccess(false);
    dispatch(setUserId(null));
    navigate("/");
  };

  useEffect(() => {
    // Si un usuario no está autorizado quiere acceder a cualquier ruta, se redigira al login.
    !access && navigate("/");
  }, [access]); // * Escucha los cambios del estado access

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
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
