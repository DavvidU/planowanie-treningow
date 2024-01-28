import { Osoba } from "../../models/models";
import React, { Dispatch, SetStateAction, useState } from 'react';
import './OsobaSzczegoly.css'
import TaskList from "../../checklist/TaskList";
import { StronaGlownaCwiczenia } from "../../cwiczenia/Cwiczenia";

function OsobaSzczegoly({ osoba }: { osoba : Osoba }) {
    return (
      <div className="container">
        <div className="person-details">
          <h2>{osoba.firstName} {osoba.lastName}</h2>
          <p>Wiek: {osoba.age}</p>
          <p>Płeć: {osoba.gender ? 'Mężczyzna' : 'Kobieta'}</p>
          <p>Wzrost: {osoba.height} cm</p>
          <p>Waga: {osoba.weight} kg</p>
          <p>Przeciwwskazania: {osoba.przeciwwskazania}</p>
          <p>Poziom treningu: {osoba.trainingLevel}</p>
          <p>Cel treningu: {osoba.cel}</p>
        </div>
        <div className="cwiczenia-osoby">
          <TaskList/>
          <StronaGlownaCwiczenia/>
        </div>
      </div>
    );
  }

  export default OsobaSzczegoly;