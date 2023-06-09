const validation = (formData) => {
  const errors = {};

  //Email
  if (!formData.email) {
    errors.email = "Este campo no puede estar vacío";
  } else if (formData.email.length > 35) {
    errors.email = "El email supera los 35 caracteres";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(formData.email)) {
    errors.email = "El email invalido!";
  }

  //Password
  //Regex que verifica que el string contenga numeros.
  if (!formData.password.match(/\d/)) {
    errors.password = "La contraseña debe contener al menos un número";
  }

  if (formData.password.length < 6 || formData.password.length > 10) {
    errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
