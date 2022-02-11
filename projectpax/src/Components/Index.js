import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => 
{
  return (
	<>
	  <Nav>
		<Bars />
  
		<NavMenu>
		  <NavLink to='/About' activeStyle>
			About
		  </NavLink>
		  <NavLink to='/BusinessPlan' activeStyle>
			Business Plan
		  </NavLink>
		  <NavLink to='/GoldenDoodles' activeStyle>
			GoldenDoodles
		  </NavLink>
		  <NavLink to='/Goldens' activeStyle>
			Goldens
		  </NavLink>
		  <NavLink to='/Poodles' activeStyle>
			Poodles
		  </NavLink>
		  <NavLink to='/Resources' activeStyle>
			Resources
		  </NavLink>
		  <NavLink to='/TheFarm' activeStyle>
			  The Farm
		  </NavLink>
		  {/* Second Nav */}
		  {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		  <NavBtnLink to='/About'>Sign In</NavBtnLink>
		</NavBtn>
	  </Nav>
	</>
  );
};
  
export default Navbar;