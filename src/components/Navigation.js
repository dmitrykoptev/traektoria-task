import React from "react";
import classes from "./Navigation.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { carsActions } from "../store/cars";

const Navigation = () => {
  const dispatch = useDispatch();
  const sortFunction = (elem) => {
    if (elem.target.type) {
      const type = elem.target.type;
      console.log(type);
      if (type === "Expensive") {
        dispatch(carsActions.sortExpensive());
      } else if (type === "Cheap") {
        dispatch(carsActions.sortCheap());
      } else if (type === "New") {
        dispatch(carsActions.sortNew());
      } else if (type === "Old") {
        dispatch(carsActions.sortOld());
      }
    }
  };

  return (
    <Navbar variant="dark" bg="dark" expand="lg" className={classes.nav}>
      <Container fluid>
        <Navbar.Brand className={classes.textL}>Отсортировать :</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title=""
              menuVariant="dark"
              onClick={sortFunction}
            >
              <NavDropdown.Item className={classes.textM} type="Expensive">
                Сначала дороже
              </NavDropdown.Item>
              <NavDropdown.Item className={classes.textM} type="Cheap">
                Сначала дешевле
              </NavDropdown.Item>
              <NavDropdown.Item className={classes.textM} type="New">
                Сначала новее
              </NavDropdown.Item>
              <NavDropdown.Item className={classes.textM} type="Old">
                Сначала старее
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
