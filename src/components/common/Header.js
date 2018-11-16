import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import './stylesheet.css';

const Header = () => {
    
  return (


<Navbar color="light" light expand="md">
<NavbarBrand href="/">reactstrap</NavbarBrand>


  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink href="/">Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/about">About</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/order">Order</NavLink>
    </NavItem>
  
    <NavItem>
      <NavLink href="/customer">Customer</NavLink>
    </NavItem>
  </Nav>

</Navbar>
  );
};

// Header.propTypes = {
//   loading: PropTypes.bool.isRequired
// };

export default Header;
