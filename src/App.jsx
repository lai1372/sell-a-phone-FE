import { useState } from "react";
import "./App.css";
import AllMobiles from "./components/AllMobiles";
import AddMobile from "./components/AddMobile";
import UpdateMobile from "./components/UpdateMobile";
import SingleMobile from "./components/SingleMobile";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import logo from "./assets/logo.png";
import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <img className="logo" src={logo} alt="logo" />

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink end to="/mobiles">
              All Mobiles
            </NavLink>
          </li>
          <li>
            <NavLink to="/mobiles/add-mobile">Add a Mobile</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles">
          <Route index element={<SingleMobile />} />
          <Route path=":id" element={<SingleMobile />} />
          <Route path="add-mobile" element={<AddMobile />} />
          <Route path="update-mobile" element={<UpdateMobile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
