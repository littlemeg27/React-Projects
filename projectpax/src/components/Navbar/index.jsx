import React from "react";
import { Nav, NavLogo, NavLink, Bars } from "./NavbarElements";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/theFarm">The Farm</Link>
      </li>
      <li>
        <Link to="/dogs">Dogs</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};
export default Navbar;
