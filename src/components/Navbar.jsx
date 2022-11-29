import React from "react";
// import {signOut} from "firebase/auth"
// import { auth } from '../firebase'
// import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  // const {currentUser} = useContext(AuthContext)

  return (
    <div className="navbar">
      <span className="logo">Q papinho</span>
      <div className="user">
        <img
          src="https://cdn.autopapo.com.br/box/uploads/2022/08/22135052/nissan-skyline-gtr-r34-paul-walker-leilao-732x488.png"
          alt=""
        />
        <span>bWUAAAAAAAAA</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
