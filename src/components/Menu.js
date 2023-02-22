import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="menu">
        <ul className="menu-item">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "linkActif" : undefined)}
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "linkActif" : undefined)}
              to="/List"
            >
              PLANTES
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "linkActif" : undefined)}
              to="/Detail"
            >
              DETAIL
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
