import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Q papinho</span>
        <span className="title">Entrar</span>
        <form>
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua senha" />

          <button>Entrar</button>
          <p>Não possui uma conta? Registro</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
