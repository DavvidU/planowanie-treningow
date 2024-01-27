import React, { Dispatch, SetStateAction, useState } from 'react';
import './Osoby.css'
import { Link, Route, useParams } from 'react-router-dom';
import { Osoba } from '../models/models';
import { BazaOsob } from '../data/osobyData';
import ListaOsob from './ListaOsob/ListaOsob';
import OsobaSzczegoly from './OsobaSzczegoly/OsobaSzczegoly';
import PasekWyszukiwania from '../PasekWyszukiwania/PasekWyszukiwania';


/* type Osoba @@@@@@@@@@@@@@@@@*/

/* Baza osob @@@@@@@@@@@@@@@@*/

/* OsobaSczegoly @@@@@@@@@@@@@@@@@*/

/* ListaOsob @@@@@@@@@@@@@@@@@*/

/* PasekWyszukiwania @@@@@@@@@@@@@@@@@*/

  function StronaGlownaOsoby() {
    const [wprowadzonyTekst, setWprowadzonyTekst] = useState('');
    return(
        <div className='container'>
            <h2 className="person-list-header">Lista osób</h2>
            <PasekWyszukiwania wprowadzonyTekst ={wprowadzonyTekst} onWprowadzonyTekstChange={setWprowadzonyTekst}/>
            <ListaOsob osoby={BazaOsob} wprowadzonyTekst ={wprowadzonyTekst}/>
        </div>
    );
  }

  function SzczegolyOsoby() {
    const { imie_nazwisko } = useParams<{ imie_nazwisko: string }>();
    console.log(imie_nazwisko);
    if (imie_nazwisko === undefined)
        return(<p>Bledny parametr</p>);
    const [osoba] = BazaOsob.filter(
      (osoba) =>
        `${osoba.firstName}_${osoba.lastName}` === imie_nazwisko
    );
  
    return (
      <div>
        <h2>Szczegóły osoby</h2>
        {osoba ? <OsobaSzczegoly osoba={osoba} /> : <p>Nie znaleziono osoby</p>}
      </div>
    );
  }

export {ListaOsob, BazaOsob, StronaGlownaOsoby, SzczegolyOsoby};