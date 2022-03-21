import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
import "./Header.css";

function Header() {
  const user = auth.currentUser;
  const dispatch = useDispatch();
  const signout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="header">
      <div className="header__left">
        <h2>To-Do List</h2>
      </div>
      <div className="header__right">
        <button className="header__LogoutButton" onClick={signout}>
          Log Out
        </button>
        <div className="header__UserAvatar"></div>
      </div>
    </div>
  );
}

export default Header;
