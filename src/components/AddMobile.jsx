import React from "react";
import { useState } from "react";
export default function AddMobile() {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [memory, setMemory] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const [colours, setColours] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/mobiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        brand: manufacturer,
        memory: memory,
        price: price,
        details: details,
        colours: colours,
      }),
    });
    setName("");
    setManufacturer("");
    setMemory("");
    setPrice("");
    setColours("");
    setDetails("");
    setImage("");
  }

  return (
    <>
      <h1>Add a Mobile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mobName">Name of mobile:</label>
        <input
          type="text"
          placeholder="e.g. iPhone 15"
          value={name}
          id="mobName"
          required
          name="mobName"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>

        <label htmlFor="manufacturer">Manufacturer:</label>
        <input
          type="text"
          value={manufacturer}
          placeholder="e.g. Apple"
          required
          id="manufacturer"
          onChange={(e) => {
            setManufacturer(e.target.value);
          }}
          name="manufacturer"
        ></input>

        <label htmlFor="details">Details:</label>
        <input
          type="text"
          placeholder=""
          id="details"
          required
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          name="details"
        ></input>

        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          placeholder=""
          id="image"
          required
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          name="image"
        ></input>

        <label htmlFor="memory">Memory:</label>
        <input
          type="number"
          title="Please enter a valid number"
          min={0}
          value={memory}
          required
          onChange={(e) => {
            setMemory(e.target.value);
          }}
          placeholder="e.g. 256"
          id="memory"
          name="memory"
        ></input>

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          min={0}
          required
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
          placeholder="1245"
          id="price"
          name="price"
        ></input>

        <label htmlFor="colours">Colours:</label>
        <input
          type="text"
          value={colours}
          required
          placeholder="e.g. Yellow, Green, Red"
          id="colours"
          onChange={(e) => {
            setColours(e.target.value);
          }}
          name="colours"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
