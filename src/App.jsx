import { useState } from "react";
import "./App.css";
import AllMobiles from "./components/AllMobiles";
import logo from "./assets/logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img className="logo" src={logo} alt="logo" />
      <h1>Sell-a-Phone</h1>
      <AllMobiles />
    </>
  );
}

export default App;
