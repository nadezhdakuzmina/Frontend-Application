import { useContext } from 'react';
import { Routes, Route } from "react-router-dom";

import Frige from "../../pages/Frige";
import Profile from "../../pages/Profile/Profile";
import ProductsList from "../../pages/ProductsList";
import Registration from "../../pages/Registration";
import Enter from "../../pages/Enter";

import { Context } from '../LogicLayout';

function Routing () {
  const { isAuthorized } = useContext(Context);

  if (isAuthorized) {
    return (
      <Routes>
        <Route exact path="/list" element={<ProductsList />} />
        <Route exact path="/frige" element={<Frige />} />
        <Route exact path="/" element={<Profile />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route exact path="/registration" element={<Registration />} />
      <Route exact path="/" element={<Enter />} />
    </Routes>
  );
}

export default Routing;