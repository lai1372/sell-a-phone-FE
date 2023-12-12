import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <img className="logo" src={logo} alt="logo" />

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink end to="/mobiles">
            All Mobiles
          </NavLink>
        </li>
        <li>
          <NavLink to="/mobiles/add-mobile">Add a Mobile</NavLink>
        </li>
        <li>
          <NavLink to="/mobiles/update-mobile">Update a Mobile</NavLink>
        </li>
        <li>
          <NavLink to="/create-account">Create an account</NavLink>
        </li>
      </ul>
    </nav>
  );
}
