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
      {mobiles.map((mobile, i) => (
        <div className="mobile-container" key={i}>
          <img className="list-image" src={mobile.image} />
          <p>{mobile.name}</p>
          <p>{mobile.brand}</p>
          <p>£{mobile.price}</p>
        </div>
      ))}
    </>
  );
}
