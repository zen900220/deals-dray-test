import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { appContext } from "../../data/AppContext";

function logout() {
  alert("logout!");
}

const Header = () => {
  const {
    appState: { user },
  } = useContext(appContext);

  return (
    <nav className="header">
      <Link to="/">Home</Link>
      {user && user.username ? (
        <>
          <Link to="/employees">Employee List</Link>
          <Link to="/dashboard">{user.username}</Link>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
};

export default Header;
