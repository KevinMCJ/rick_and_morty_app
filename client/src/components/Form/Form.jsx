import { useState } from "react";
import validation from "./validate";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // !Si aun no es un input valido y el usuario escribe mas de 20 letras , al hacer esto cada vez
  // !La aplicacion pierde mas rendimiento.. investigar debounce y metodos asi para esperar a que
  // !El usuario deje de escibir y ahi realizar las validaciones.
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({
      ...userData,
      [property]: value,
    });

    setErrors(
      validation({
        ...userData,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.welcome}>
        <h1>RICK & MORTY APP</h1>
        <p>
          ¡Bienvenidos a la aventura más loca del universo! ¿Eres fanático de
          Rick y Morty? ¿Te encanta conocer todos los detalles de tus personajes
          favoritos? ¡Entonces estas en la aplicación perfecta para ti! Con esta
          app, podrás acceder a información detallada de los 826 personajes de
          la serie. Desde los protagonistas más conocidos hasta los personajes
          más extraños y aleatorios, tendrás acceso a todos ellos en un solo
          lugar. Además, podrás agregar tus personajes favoritos a una lista
          especial, para que nunca los pierdas de vista. ¿Te gusta coleccionar
          cosas? Entonces te encantará nuestra sección de cartas coleccionables,
          donde podrás encontrar detalles exclusivos de cada personaje.
          Colecciona todas las cartas y conviértete en el mayor experto de Rick
          y Morty.
        </p>
        <p className={style.author}>App by: Kevin Mamani</p>
      </div>
      <div className={style.login}>
        <h2>Ingresa</h2>
        <div className={style.inputBox}>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={style.errorText}>{errors.email}</span>}
        </div>
        <div className={style.inputBox}>
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <span className={style.errorText}>{errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
