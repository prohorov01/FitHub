import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/workout-programs"
            className="nav-link"
            activeClassName="active"
          >
            Training programs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/progress" className="nav-link" activeClassName="active">
            Progress
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link" activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/settings" className="nav-link" activeClassName="active">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
