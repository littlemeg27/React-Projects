import React from "react";
import { Nav, NavLogo, NavLink, Bars } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Logo</NavLogo>
        <Bars />
        <NavLink to="/" activeStyle={{ color: "grey" }}>
          Home
        </NavLink>
        <NavLink to="/about" activeStyle={{ color: "grey" }}>
          About
        </NavLink>
        <NavLink to="/theFarm" activeStyle={{ color: "grey" }}>
          The Farm
        </NavLink>
        <NavLink to="/dogs" activeStyle={{ color: "grey" }}>
          Dogs
        </NavLink>
        <NavLink to="/contact" activeStyle={{ color: "grey" }}>
          Contact
        </NavLink>
      </Nav>
    </>
  );
};
export default Navbar;
