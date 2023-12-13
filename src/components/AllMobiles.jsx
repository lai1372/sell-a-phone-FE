import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllMobiles() {
  const [mobiles, setMobiles] = useState([]);
  const [filteredResults, setFilteredResults] = useState(mobiles);
  const [searchInput, setSearchInput] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(false);
  const navigate = useNavigate();

  function handleBrand(e) {
    console.log(e.target.value);
    setBrand(e.target.value);
    const brandResults = mobiles.filter((mobile) =>
      mobile.brand.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPrice(false);
    setFilteredResults(brandResults);
  }

  function handlePrice(e) {
    if (e.target.value === "High to Low") {
      setBrand(e.target.value);
      const priceResults = mobiles.sort(
        (mobilea, mobileb) => mobileb.price - mobilea.price
      );
      setPrice(true);
      setFilteredResults(priceResults);
      setBrand("");
    } else if (e.target.value === "Low to High") {
      console.log("in low to high");
      setBrand(e.target.value);
      const priceResults = mobiles.sort(
        (mobilea, mobileb) => mobilea.price - mobileb.price
      );
      setPrice(true);
      setFilteredResults(priceResults);
      setBrand("");
    } else {
      setPrice(false);
    }
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
  const handleChange = (e) => {
    const results = mobiles.filter(
      (mobile) =>
        mobile.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        mobile.brand.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredResults(results);
    setSearchInput(e.target.value);
  };

  function handleClick(mobile) {
    navigate(`/mobiles/${mobile.id}`);
  }

  useEffect(() => {
    fetchMobiles();
  }, [filteredResults]);

  return (
    <>
      <select onChange={handleBrand}>
        <option>Filter by brand</option>
        {mobiles.map((mobile, idx) => (
          <option key={idx} value={mobile.brand}>
            {mobile.brand}
          </option>
        ))}
      </select>
      <select onChange={handlePrice}>
        <option>Filter by Price</option>
        <option>High to Low</option>
        <option>Low to High</option>
      </select>
      <input
        type="text"
        placeholder="Search for a mobile name or brand"
        onChange={handleChange}
        value={searchInput}
      />
      {searchInput.length === 0 && !brand && !price ? (
        <div>
          <div>
            {mobiles.map((mobile, idx) => (
              <div
                className="mobile-container"
                key={idx}
                onClick={() => {
                  handleClick(mobile);
                }}
              >
                <img className="list-image" src={mobile.image} />
                <p>{mobile.name}</p>
                <p>{mobile.brand}</p>
                <p>£{mobile.price}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div>
            {filteredResults.map((mobile, idx) => (
              <div
                className="mobile-container"
                key={idx}
                onClick={() => {
                  handleClick(mobile);
                }}
              >
                <img className="list-image" src={mobile.image} />
                <p>{mobile.name}</p>
                <p>{mobile.brand}</p>
                <p>£{mobile.price}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
