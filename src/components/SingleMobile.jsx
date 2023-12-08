import React from "react";
import { useParams } from "react-router-dom";

export default function SingleMobile() {
  const { id } = useParams();

  return (
    <>
      <h1>Mobile number {id}</h1>
    </>
  );
}
