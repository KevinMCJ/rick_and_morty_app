import { useEffect, useState } from "react";
import validation from "./validate";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [hasErrors, setHasErrors] = useState(true);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!hasErrors) login(userData);
  };

  // * Cuando no exista ninguna propiedad en errors se puede enviar el formulario.
  useEffect(() => {
    !Object.keys(errors).length ? setHasErrors(false) : setHasErrors(true);
  }, [errors]);

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.welcome}>
        <h1>RICK & MORTY APP</h1>
        <p>
          Welcome to the craziest adventure in the universe! Are you a Rick and
          Morty fan? Do you love to know all the details about your favorite
          characters? Then this is the perfect app for you! With this app, you
          will be able to access detailed information about the 826 characters
          of the series. From the best-known protagonists to the strangest and
          characters, you will have access to all of them in one place. Plus,
          you can add your favorite characters to a special list, so you'll
          never miss them. Do you like to collect things? Then you'll love our
          collectible cards section, where you can find exclusive details of
          each character. Collect all the cards and become the greatest Rick and
          Morty expert.
        </p>
        <p className={style.author}>App by: Kevin Mamani</p>
      </div>
      <div className={style.login}>
        <h2>Login</h2>
        <div className={style.inputBox}>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className={style.errorText}>{errors.email}</span>
          )}
        </div>
        <div className={style.inputBox}>
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className={style.errorText}>{errors.password}</span>
          )}
        </div>
        <button type="submit" disabled={hasErrors} className={style.btnSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
