import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import "./Login.css";

function Login() {
  const signIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="login">
      <div className="login__inner">
        <h1>Sign in to Manish's Todo List</h1>

        <button onClick={signIn}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default Login;
