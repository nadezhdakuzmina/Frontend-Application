import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header () {
  let isAuthorized = true;

  if (isAuthorized) {
    return(
    <div className="header">
      <Link to="/list">
        <button className="button_Navigation">Список покупок</button>
      </Link>
      <Link to="/frige">
        <button className="button_Navigation">Холодильник</button>
      </Link>
      <Link to="/">
        <button className="button_Navigation">Профиль</button>
      </Link>
    </div>
    );
  }

  return (
    <div>
      <Link to="/registration">
        <button className="button_Navigation">Зарегистрироваться</button>
      </Link>
      <Link to="/enter">
        <button className="button_Navigation">Войти</button>
      </Link>
    </div>
  );
}

export default Header;