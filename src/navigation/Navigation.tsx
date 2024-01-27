import React from "react";
import TaskList from "../checklist/TaskList";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../Home";
import "./Navigation.css";
import { StronaGlownaOsoby, SzczegolyOsoby } from "../osoby/Osoby";
import { StronaGlownaCwiczenia } from "../cwiczenia/Cwiczenia";

function Navigation() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" className="custom-navbar">
        <Navbar.Brand>
         
        </Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to={"/"}>Strona Główna</Nav.Link>
        <Nav.Link as={Link} to={"/tasklist"}>Task lista</Nav.Link>
        <Nav.Link as={Link} to={"/osoby"}>Osoby</Nav.Link>
        <Nav.Link as={Link} to={"/cwiczenia"}>Lista ćwiczeń</Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/osoby" element={<StronaGlownaOsoby/>} />
        <Route path="/osoba/:id" element={<SzczegolyOsoby />}/>
        <Route path="/cwiczenia" element={<StronaGlownaCwiczenia/>} />
      </Routes>
    </Router>
  );
}

export default Navigation;
