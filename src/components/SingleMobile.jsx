import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleMobile() {
  const { id } = useParams();
  const [mobile, setMobile] = useState({});

  async function getMobile() {
    const response = await fetch(`http://localhost:8080/mobiles/${id}`);
    const data = await response.json();
    setMobile(data);
  }

  async function handleDelete() {
    const response = await fetch(`http://localhost:8080/mobiles/${id}`, {
      method: "DELETE",
    });
    const data = response.json();
  }

  useEffect(() => {
    getMobile();
  }, []);

  return (
    <>
      <h1>Details for {mobile.name}</h1>
      <div>
        <img className="list-image" src={mobile.image} />
        <p>Brand: {mobile.brand}</p>
        <p>Price: £{mobile.price}</p>
        <p>Memory: {mobile.memory}GB</p>
        <p>Details: {mobile.details}</p>
        <p>Colours: {mobile.colours}</p>
      </div>
      <button onClick={handleDelete}>Delete item</button>
    </>
  );
}
