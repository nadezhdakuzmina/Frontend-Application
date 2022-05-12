import {Routes, Route} from "react-router-dom"
import Frige from "../../pages/Frige";
import Profile from "../../pages/Profile/Profile";
import ProductsList from "../../pages/ProductsList";
import Registration from "../../pages/Registration";
import Enter from "../Enter";

function Routing () {

  let isAuthorized = true;

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
      <Route exact path="/enter" element={<Enter />} />
    </Routes>
  );
}

export default Routing;