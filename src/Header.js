import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <Navbar.Brand href="home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="refresh">Refresh</Nav.Link>
              <Nav.Link href="sidebar">Sidebar</Nav.Link>
              <Nav.Link href="dashboard">Dashboard</Nav.Link>
              <Nav.Link href="myprojects">My projects</Nav.Link>
              <Nav.Link href="mytopics">My Topics</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="contactus">Contact Us </Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="logout">Log Out</Nav.Link>

            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
