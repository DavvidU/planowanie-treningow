import { Cwiczenie, Osoba } from "../../models/models";
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './OsobaSzczegoly.css'
import TaskList from "../../checklist/TaskList";
import { StronaGlownaCwiczenia } from "../../cwiczenia/Cwiczenia";
import ListaCwiczen from "../../cwiczenia/ListaCwiczen/ListaCwiczen";
import { GetCwiczeniaDzienBrzucha, GetCwiczeniaDzienLowerBody, GetCwiczeniaDzienUpperBody } from "../../cwiczenia/CwiczeniaService";
import MotywacyjnyPrzycisk from "../../MotywacyjnyPrzycisk/MotywacyjnyPrzycisk";

function OsobaSzczegoly({ osoba }: { osoba : Osoba }) {
  let cwiczeniaUpperBody : Cwiczenie[] = GetCwiczeniaDzienUpperBody(osoba);
  let cwiczeniaBrzucha : Cwiczenie[] = GetCwiczeniaDzienBrzucha(osoba);
  let cwiczeniaLowerBody : Cwiczenie[] = GetCwiczeniaDzienLowerBody(osoba);

  useEffect(() => {
    document.title = 'Szczegoly osoby - Planowanie Treningow';
}, []);

    return (
      <div className="container">
        <MotywacyjnyPrzycisk />
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
          
          <div>
            <h2 color="#000000">Dzień Upper Body</h2>
              <div className="cwiczenie-item">
                <ListaCwiczen cwiczenia={cwiczeniaUpperBody} wprowadzonyTekst={""}/>
              </div>
            
            <h2>Dzień Brzucha</h2>
              <div className="cwiczenie-item">
                <ListaCwiczen cwiczenia={cwiczeniaBrzucha} wprowadzonyTekst={""} />
              </div>
            
            <h2>Dzień Lower Body</h2>
              <div className="cwiczenie-item">
                <ListaCwiczen cwiczenia={cwiczeniaLowerBody} wprowadzonyTekst={""} />
              </div>
          </div>
        </div>
      </div>
    );
  }

  export default OsobaSzczegoly;