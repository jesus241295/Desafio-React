import { Outlet, Link } from "react-router-dom";

import Home from "../../pages/Home"

import Navbar from "../../components/Navbar"


export default function AppContainer() {
  return (
    <div>
      {/* <Link to="">Home</Link> */}

      <div className="main-div-app-container">
      <Navbar /> 
      {/* <h2>esto es app</h2> */}
      <Home />
      </div>
      <Outlet />
    </div>
  );
}
