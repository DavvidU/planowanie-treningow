import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Planer Ćwiczeń <span className="small-text">Dla Trenerów</span>
      </h1>
      <div className="welcome-section">
        <h2>Witaj w Planerze Ćwiczeń!</h2>
        <p>
          Planer Ćwiczeń jest narzędziem stworzonym specjalnie dla trenerów, które pomaga w
          zarządzaniu planem treningowym swoich podopiecznych.
        </p>
      </div>
      <div className="features-section">
        <h2 className="fc-title">Funkcjonalności:</h2>
        <ul className="fc-list">
          <li>Łatwy sposób dodawania i edycji informacji o podopiecznych.</li>
          <li>Przeglądanie planów treningowych podopiecznych.</li>
          <li>Tworzenie dedykowanych planów treningowych dla każdej osoby.</li>
          <li>Lista zdań do śledzenia bieżących czynności z możliwością odhaczania wykonanych.</li>
        </ul>
      </div>
      <div className="image-section">
        <img src="/src/gym.png"/>
      </div>
    </div>
  );
}

export default Home;
