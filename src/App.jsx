import { useState } from "react";
import "./App.css";
import AllMobiles from "./components/AllMobiles";
import AddMobile from "./components/AddMobile";
import UpdateMobile from "./components/UpdateMobile";
import SingleMobile from "./components/SingleMobile";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/LogOut";
import CreateAccount from "./components/CreateAccount";
import logo from "./assets/logo.png";
import {
  Route,
  Routes,
  NavLink,
  redirect,
  useNavigate,
} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [authenticated, setAuthenticated] = useState({
    user: "",
    isAuthenticated: false,
  });

  const navigate = useNavigate();

  function handleLogout() {
    setAuthenticated({
      user: "",
      isAuthenticated: false,
    });
    navigate("/logout");
  }
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
          <li>
            <NavLink to="/mobiles/update-mobile">Update a Mobile</NavLink>
          </li>
          <li>
            <NavLink to="/create-account">Create an account</NavLink>
          </li>
          {authenticated.isAuthenticated ? (
            <NavLink to="/logout" onClick={handleLogout}>
              Logout
            </NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </ul>
      </nav>
      <Routes>
        <Route element={<ProtectedRoute authenticated={authenticated} />}>
          <Route path="/" element={<Home authenticated={authenticated} />} />
          <Route path="/mobiles">
            <Route index element={<AllMobiles />} />
            <Route path=":id" element={<SingleMobile />} />
            <Route path="add-mobile" element={<AddMobile />} />
            <Route path="update-mobile" element={<UpdateMobile />} />
          </Route>
        </Route>

        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/login"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/logout"
          element={<Logout setAuthenticated={setAuthenticated} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
