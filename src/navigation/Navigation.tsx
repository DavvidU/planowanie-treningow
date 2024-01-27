import React from "react";
import TaskList from "../checklist/TaskList";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../Home";
import "./Navigation.css";

function Navigation() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" className="custom-navbar">
        <Navbar.Brand>
         
        </Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to={"/"}>Strona Główna</Nav.Link>
        <Nav.Link as={Link} to={"/tasklist"}>Lista Ćwiczeń</Nav.Link>
        <Nav.Link as={Link} to={"/osoby"}>Osoby</Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
