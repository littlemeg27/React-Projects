import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Logo</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle={{ color: "black" }}>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle={{ color: "black" }}>
            About
          </NavLink>
          <NavLink to="/theFarm" activeStyle={{ color: "black" }}>
            The Farm
          </NavLink>
          <NavLink to="/dogs" activeStyle={{ color: "black" }}>
            Dogs
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/donate">Donate</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
