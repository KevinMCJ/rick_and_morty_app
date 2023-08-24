const validation = (formData) => {
  const errors = {};

  // * Email
  if (!formData.email.trim()) {
    errors.email = "Este campo no puede estar vacío";
  } else if (formData.email.length > 35) {
    errors.email = "El email supera los 35 caracteres";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(formData.email.trim())) {
    errors.email = "El email invalido!";
  }

  // * Password
  // ? Regex que verifica que el string contenga numeros.
  if (formData.password.length < 5 || formData.password.length > 20) {
    errors.password = "La contraseña debe contener entre 5 y 20 caracteres";
  }

  return errors;
};

export default validation;
