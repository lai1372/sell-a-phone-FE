import { useState } from "react";
import "./App.css";
import AllMobiles from "./components/AllMobiles";
import AddMobile from "./components/AddMobile";
import UpdateMobile from "./components/UpdateMobile";
import SingleMobile from "./components/SingleMobile";
import logo from "./assets/logo.png";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="add-mobile">Add a Mobile</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AllMobiles />} />
        <Route path="/add-mobile" element={<AddMobile />} />
        <Route path="/update-mobile" element={<UpdateMobile />} />
        <Route path="/:id" element={<SingleMobile />} />
      </Routes>
    </>
  );
}

export default App;

// (
//   <>
//     <img className="logo" src={logo} alt="logo" />
//     <h1>Sell-a-Phone</h1>
//     <AllMobiles />
//   </>
// );
