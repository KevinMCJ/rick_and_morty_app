const validation = (formData) => {
  const errors = {};

  // * Email
  if (!formData.email.trim()) {
    errors.email = "Email required";
  } else if (formData.email.length > 35) {
    errors.email = "Cannot exceed 35 characters";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(formData.email.trim())) {
    errors.email = "Invalid email!";
  }

  // * Password
  // ? Regex que verifica que el string contenga numeros.
  if (formData.password.length < 5 || formData.password.length > 20) {
    errors.password = "Must be between 5 and 20 caracteres";
  }

  return errors;
};

export default validation;
