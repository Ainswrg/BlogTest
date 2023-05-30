import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

import type { FC } from "react";

export const Header: FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Blog-app
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about-me">
              About me
            </Nav.Link>
            <Nav.Link as={Link} to="/user-details">
              User details
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
