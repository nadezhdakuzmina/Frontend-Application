import { useContext } from "react";
import { Link } from "react-router-dom";
import './Header.css';

import { Context } from '../LogicLayout';

function Header () {
  const {
    isAuthorized,
    handleLogout,
  } = useContext(Context);

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
      <button onClick={handleLogout} className="button_Navigation">Выйти</button>
    </div>
    );
  }

  return (
    <div>
      <Link to="/registration">
        <button className="button_Navigation">Зарегистрироваться</button>
      </Link>
      <Link to="/">
        <button className="button_Navigation">Войти</button>
      </Link>
    </div>
  );
}

export default Header;