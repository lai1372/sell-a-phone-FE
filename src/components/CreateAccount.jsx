import React from "react";
import { useState } from "react";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validPw, setValidPW] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  function handleChange(e) {
    console.log(e.target.value);
    const regex =
      /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*()-+_=]{1,})(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-+_=]{6,}$/;
    if (e.target.value.match(regex)) {
      setPassword(e.target.value);
      setValidPW(true);
      setIsDisabled(false);
    } else {
      setValidPW(false);
      setIsDisabled(true);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        emailAddress: email,
        age: age,
      }),
    });
    setUsername("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setAge(0);
  }

  return (
    <>
      <h1>Create an account!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="e.g. PhonesAreFantastic143"
          value={username}
          id="username"
          required
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          required
          name="password"
          onChange={handleChange}
        ></input>
        <p>
          {validPw
            ? ""
            : "Your password should have a special character, number, uppercase letter and be at least 6 characters long."}
        </p>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          value={firstName}
          placeholder="Jane"
          id="firstName"
          name="firstName"
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          value={lastName}
          placeholder="Doe"
          id="lastName"
          required
          name="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          id="email"
          required
          placeholder="jane.doe@gmail.com"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>

        <label htmlFor="age">Age</label>
        <input
          type="text"
          value={age}
          id="age"
          name="age"
          required
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>
        <button type="submit" disabled={isDisabled}>
          Submit
        </button>
      </form>
    </>
  );
}
