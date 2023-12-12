import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setAuthenticated}) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      setAuthenticated(true);
      navigate("/");
    } else {
        setAuthenticated(false)
      setLoginError(true);
    }
  };

  async function fetchUsers() {
    const response = await fetch("http://localhost:8080/users");
    const usersData = await response.json();
    setUsers(usersData);
  }

  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <p>Log In</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          type="text"
          name="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          name="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
        <p>{loginError ? "Incorrect details!" : ""}</p>
      </form>
    </div>
  );
}
