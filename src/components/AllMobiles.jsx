import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllMobiles() {
  const [mobiles, setMobiles] = useState([]);
  const navigate = useNavigate();

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

  function handleClick(mobile) {
    navigate(`/mobiles/${mobile.id}`);
  }

  useEffect(() => {
    fetchMobiles();
  }, []);
  return (
    <>
      {mobiles.map((mobile, i) => (
        <div
          className="mobile-container"
          key={i}
          onClick={() => {
            handleClick(mobile);
          }}
        >
          <img className="list-image" src={mobile.image} />
          <p>{mobile.name}</p>
          <p>{mobile.brand}</p>
          <p>£{mobile.price}</p>
        </div>
      ))}
    </>
  );
}
