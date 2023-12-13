import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllMobiles() {
  const [mobiles, setMobiles] = useState([]);
  const [filteredResults, setFilteredResults] = useState(mobiles);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

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
  }, []);
  return (
    <>
      <select>
        <option>Sort by brand</option>
        {mobiles.map((mobile) => (
          <option value={mobile.brand}>{mobile.brand}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search for a mobile name or brand"
        onChange={handleChange}
        value={searchInput}
      />
      {searchInput.length === 0 ? (
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
