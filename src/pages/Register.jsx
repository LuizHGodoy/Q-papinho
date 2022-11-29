import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // const date = new Date().getTime();
      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            // navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            // setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      // setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Q papinho</span>
        <span className="title">Registro</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome de Usuário" />
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua melhor senha!!" />
          <input type="file" id="avatar" hidden />
          <label htmlFor="avatar">
            <img src={Add} alt="" />
            <span>Adicionar foto de perfil</span>
          </label>

          <button>Registre-se</button>
          {err && <span>alguma coisa deu errado</span>}
        </form>
        <p>Já possui uma conta? Login</p>
      </div>
    </div>
  );
};

export default Register;
