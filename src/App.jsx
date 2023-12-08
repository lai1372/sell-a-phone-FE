import { useState } from "react";
import "./App.css";
import AllMobiles from "./components/AllMobiles";
import AddMobile from "./components/AddMobile";
import UpdateMobile from "./components/UpdateMobile";
import SingleMobile from "./components/SingleMobile";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import logo from "./assets/logo.png";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <img className="logo" src={logo} alt="logo" />

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mobiles">All Mobiles</Link>
          </li>
          <li>
            <Link to="add-mobile">Add a Mobile</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<AllMobiles />} />
        <Route path="/add-mobile" element={<AddMobile />} />
        <Route path="/update-mobile" element={<UpdateMobile />} />
        <Route path="/mobiles/:id" element={<SingleMobile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
