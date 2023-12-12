import { useState } from "react";
import "./App.css";
import AllMobiles from "./components/AllMobiles";
import AddMobile from "./components/AddMobile";
import UpdateMobile from "./components/UpdateMobile";
import SingleMobile from "./components/SingleMobile";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/LogOut";
import CreateAccount from "./components/CreateAccount";
import logo from "./assets/logo.png";
import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  const [authenticated, setAuthenticated] = useState({
    user: "",
    isAuthenticated: false,
  });
  return (
    <>
      <nav>
        <img className="logo" src={logo} alt="logo" />

        <ul>
          <li>
            <NavLink to={authenticated.isAuthenticated ? "/" : "/login"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to={authenticated.isAuthenticated ? "/mobiles" : "/login"}
            >
              All Mobiles
            </NavLink>
          </li>
          <li>
            <NavLink
              to={
                authenticated.isAuthenticated ? "/mobiles/add-mobile" : "/login"
              }
            >
              Add a Mobile
            </NavLink>
          </li>
          <li>
            <NavLink
              to={
                authenticated.isAuthenticated
                  ? "/mobiles/update-mobile"
                  : "/login"
              }
            >
              Update a Mobile
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-account">Create an account</NavLink>
          </li>
          {authenticated.isAuthenticated ? (
            <NavLink to="/logout">Logout</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home authenticated={authenticated} />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/login"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/logout"
          element={<Logout setAuthenticated={setAuthenticated} />}
        />
        <Route path="/mobiles">
          <Route index element={<AllMobiles />} />
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
