import React from "react";
import { useState, useEffect } from "react";

export default function updateMobile() {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [memory, setMemory] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const [colours, setColours] = useState([]);
  const [mobiles, setMobiles] = useState({});
  const [chosenMobile, setChosenMobile] = useState({});

  async function handleSubmit() {
    e.preventDefault();
    try {
      await fetch(`http://localhost:8080/mobiles/${chosenMobile.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: chosenMobile.id,
          name: name,
          image: image,
          brand: manufacturer,
          memory: memory,
          price: price,
          details: details,
          colours: colours.split(),
        }),
      });
    } catch (err) {
      console.log(err);
      return err;
    }

    setName("");
    setManufacturer("");
    setMemory("");
    setPrice("");
    setColours("");
    setDetails("");
    setImage("");
  }
  console.log(chosenMobile.id);

  function handleChange(event) {
    const selectedIndex = event.target.selectedIndex;
    const selectedMobile = event.target[selectedIndex];
    const mobileId = selectedMobile.getAttribute("data-id");
    const mobileName = selectedMobile.value;
    setChosenMobile({ id: mobileId, name: mobileName });
  }

  async function fetchMobiles() {
    try {
      const response = await fetch("http://localhost:8080/mobiles");
      const mobileData = await response.json();
      setMobiles(mobileData);
    } catch (err) {
      return err;
    }
  }

  useEffect(() => {
    fetchMobiles();
  }, []);

  return (
    <>
      <h1>Update a Mobile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dropdown">Which mobile would you like to update:</label>
        <select id="dropdown" name="mobileNames" onChange={handleChange}>
          <option value="Choose a phone">Choose a mobile to update</option>

          {Array.isArray(mobiles) &&
            mobiles.map((mobile, idx) => (
              <option key={idx} value={mobile.name} data-id={mobile.id}>
                {mobile.name}
              </option>
            ))}
        </select>
        <label htmlFor="name">Updated name:</label>
        <input
          type="text"
          value={name}
          placeholder="iPhone 15"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="manufacturer"
        ></input>
        <label htmlFor="manufacturer">Updated Manufacturer:</label>
        <input
          type="text"
          value={manufacturer}
          placeholder="e.g. Apple"
          id="manufacturer"
          onChange={(e) => {
            setManufacturer(e.target.value);
          }}
          name="manufacturer"
        ></input>

        <label htmlFor="details">Updated Details:</label>
        <input
          type="text"
          placeholder=""
          id="details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          name="details"
        ></input>

        <label htmlFor="image">Updated Image URL:</label>
        <input
          type="text"
          placeholder=""
          id="image"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          name="image"
        ></input>

        <label htmlFor="memory">Updated Memory:</label>
        <input
          type="number"
          title="Please enter a valid number"
          min={0}
          value={memory}
          onChange={(e) => {
            setMemory(e.target.value);
          }}
          placeholder="e.g. 256"
          id="memory"
          name="memory"
        ></input>

        <label htmlFor="price">Updated Price:</label>
        <input
          type="number"
          min={0}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
          placeholder="1245"
          id="price"
          name="price"
        ></input>

        <label htmlFor="colours">Updated Colours:</label>
        <input
          type="text"
          value={colours}
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
