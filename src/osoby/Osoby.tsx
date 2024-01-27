import React from 'react';
import './Osoby.css'

type Osoba = {
    id: number,
    firstName: string,
    lastName: string,
    height: number,
    weight: number,
    age: number,
    gender: boolean,
    przeciwwskazania: string,
    trainingLevel: string,
    cel: string,
}

/* Baza osob */

const BazaOsob : Osoba[] = [
    { id: 1, firstName: 'Jan', lastName: 'Kowalski', height: 180, weight: 70, age: 30, gender: true, przeciwwskazania: '', trainingLevel: 'sredniozaawansowany', cel: 'redukcja' },
    { id: 2, firstName: 'Anna', lastName: 'Nowak', height: 160, weight: 55, age: 25, gender: false, przeciwwskazania: 'alergia', trainingLevel: 'zaawansowany', cel: 'wydolnosc' },
    { id: 3, firstName: 'Jarosław', lastName: 'Natka', height: 172, weight: 90, age: 78, gender: true, przeciwwskazania: 'Nosi okulary', trainingLevel: 'poczatkujacy', cel: 'masa' },
    { id: 4, firstName: 'Alfred', lastName: 'Konik', height: 161, weight: 88, age: 33, gender: true, przeciwwskazania: 'Kuleje na lewą noge', trainingLevel: 'sredniozaawansowany', cel: 'utrzymanie' },
    { id: 5, firstName: 'Doniczka', lastName: 'Eucharystia', height: 199, weight: 84, age: 15, gender: false, przeciwwskazania: 'Kwitnie w niej kwiatek', trainingLevel: 'sredniozaawansowany', cel: 'masa' },
    { id: 6, firstName: 'Krawat', lastName: 'Taboret', height: 154, weight: 79, age: 28, gender: true, przeciwwskazania: 'Paraliż od pasa w dół', trainingLevel: 'zaawansowany', cel: 'wydolnosc' },
    { id: 7, firstName: 'John', lastName: 'Doe', height: 190, weight: 65, age: 26, gender: true, przeciwwskazania: '', trainingLevel: 'sredniozaawansowany', cel: 'utrzymanie' },
    { id: 8, firstName: 'Ala', lastName: 'Makota', height: 185, weight: 67, age: 32, gender: false, przeciwwskazania: 'Ćwiczy z kotem', trainingLevel: 'poczatkujacy', cel: 'masa' }
]

type ListaOsobProps = {
    osoby: Osoba[];
}

/* Cwiczenie */

function OsobaSzczegoly({ firstName, lastName, height, weight, age, gender, przeciwwskazania, trainingLevel, cel }: Osoba) {
    return (
      <div className="person-details">
        <h2>{firstName} {lastName}</h2>
        <p>Wiek: {age}</p>
        <p>Płeć: {gender ? 'Mężczyzna' : 'Kobieta'}</p>
        <p>Wzrost: {height} cm</p>
        <p>Waga: {weight} kg</p>
        <p>Przeciwwskazania: {przeciwwskazania}</p>
        <p>Poziom treningu: {trainingLevel}</p>
        <p>Cel treningu: {cel}</p>
      </div>
    );
  }

  function ListaOsob({ osoby } : ListaOsobProps){
    return(
        <div>
        {osoby.map(osoba => (
        <div className='person-item' key={osoba.id}>
          {OsobaSzczegoly(osoba)}
        </div>
      ))}
    </div>
    );
  }

export {ListaOsob, BazaOsob};