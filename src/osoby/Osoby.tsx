import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
    useEffect(() => {
      document.title = 'Osoby - Planowanie Treningow';
  }, []);
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
    let { id } = useParams<{ id: string }>();
    if (id === undefined)
        return(<p>Bledny parametr</p>);
    
    let idNumber = parseInt(id, 10);
    if (isNaN(idNumber)) {
      return (<p>Błędny parametr</p>);
  }
    
  const osoba = BazaOsob.find(os => os.id === idNumber);
  
    return (
      <div  className='container'>
        <h2 className="person-list-header">Szczegóły osoby</h2>
        {osoba ? <OsobaSzczegoly osoba={osoba} /> : <p>Nie znaleziono osoby</p>}
      </div>
    );
  }

export {ListaOsob, BazaOsob, StronaGlownaOsoby, SzczegolyOsoby};