import React from "react";
import { useState } from "react";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

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
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          value={password}
          id="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          value={firstName}
          placeholder="Jane"
          id="firstName"
          name="firstName"
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
          onChange={(e) => {
            setAge(e.target.value);
          }}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
