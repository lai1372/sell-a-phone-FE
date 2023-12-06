import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function AllMobiles() {
  const [mobiles, setMobiles] = useState([]);

  async function fetchMobiles() {
    try {
      const response = await fetch("http://localhost:8080/mobiles");
      const mobileData = await response.json();
      setMobiles(mobileData);
      console.log(mobileData);
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
    fetchMobiles();
  }, []);
  return (
    <>
      {mobiles.map((mobile) => (
        <div>
          <p>{mobile.name}</p>
          <img className="list-image" src={mobile.image} />
        </div>
      ))}
      <h1>Hello</h1>
    </>
  );
}
