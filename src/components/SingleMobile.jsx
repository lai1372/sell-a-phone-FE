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
  useEffect(() => {
    getMobile();
  }, []);

  return (
    <>
      <h1>Mobile number {id}</h1>
      <p>{mobile.name}</p>
    </>
  );
}
