export default function validation(userData) {
  const emailRegExp = /\S+@\S+\.\S+/;
  const numeroRegExp = /\d+/;
  const errors = {};

  if(!userData.email.length) errors.email = "Debe ingresar un email";
  else {
    if(!emailRegExp.test(userData.email)) errors.email = "Debe ingresar email correcto";
    if(userData.email.length > 35) errors.email = "Email no puede tener más de 35 caracteres";
  }
    
  if(!userData.password.length) errors.password = "Debe ingresar un password";
  else {
    if(!numeroRegExp.test(userData.password)) errors.password = "Password debe tener al menos un número";
    if(userData.password.length < 6) errors.password = "Password debe tener al menos 6 caracteres";
    if(userData.password.length > 10) errors.password = "Password no puede tener más de 10 caracteres";
  }

  return errors;
}