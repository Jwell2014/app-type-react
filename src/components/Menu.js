import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/List">PLANTES</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
