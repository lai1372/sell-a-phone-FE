import { useEffect, useState } from "react";

export default function Logout({ setAuthenticated }) {
  const [loggedOut, setLoggedOut] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setAuthenticated(false);
    setLoggedOut(true);
  }

  return (
    <>
      {!loggedOut ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="submit" value="Log out?" />
          </form>
        </div>
      ) : (
        <p>You've successfully logged out!</p>
      )}
    </>
  );
}
