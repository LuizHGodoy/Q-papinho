import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Q papinho</span>
        <span className="title">Registro</span>
        <form>
          <input type="text" placeholder="Nome de Usuário" />
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua melhor senha!!" />
          <input type="file" id="avatar" hidden />
          <label htmlFor="avatar">
            <img src={Add} alt="" />
            <span>Adicionar foto de perfil</span>
          </label>

          <button>Registre-se</button>
          <p>Já possui uma conta? Login</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
