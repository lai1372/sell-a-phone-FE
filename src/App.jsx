import { useState } from "react";
import "./App.css";
import AllMobiles from "./components/AllMobiles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AllMobiles />
    </>
  );
}

export default App;
