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
      <NavLink href="/">About</NavLink>
    </NavItem>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
      Customer Details
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem href="/">
         Add Customer
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          Update Customer
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          Delete Customer
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Order Details
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem href="/addorder" >
         Add Order
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          Update Order
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          Delete Order
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Nav>

</Navbar>
  );
};

// Header.propTypes = {
//   loading: PropTypes.bool.isRequired
// };

export default Header;
