import React, { useState, useEffect } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [username, setUsername] = useState("");
  const history = useHistory();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const handleLogout = () => {
    localStorage.removeItem("username");
    history.push("/login");
    window.location.reload();
  };

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            Laundry
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!collapsed}
            navbar
          >
            <ul className="navbar-nav flex-grow">
            {username && (
                <NavItem className="mr-5">
                  <span className="navbar-text">Logged in as: {username}</span>
                </NavItem>
              )}
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  Home
                </NavLink>
              </NavItem>
              {!username && (
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/Login">
                  Login
                </NavLink>
              </NavItem>
              )}          
              {username && (
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="text-dark"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavLink>
                </NavItem>
              )}
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavMenu;
