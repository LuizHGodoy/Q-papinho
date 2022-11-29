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
        <img src="" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
