import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Q papinho</span>
        <span className="title">Entrar</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua senha" />

          <button>Entrar</button>
          {err && <span>alguma coisa deu errado</span>}
          <p>
            Não possui uma conta? <Link to="/register">Registre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
