const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
app.use(cors());

// Parsowanie danych z formatu JSON
app.use(bodyParser.json());

// Lista osób
let persons = [
  { id: 1, firstName: 'Jan', lastName: 'Kowalski', height: 180, weight: 70, age: 30, gender: true, przeciwwskazania: '', trainingLevel: 'sredniozaawansowany', cel: 'redukcja' },
  { id: 2, firstName: 'Anna', lastName: 'Nowak', height: 160, weight: 55, age: 25, gender: false, przeciwwskazania: 'alergia', trainingLevel: 'zaawansowany', cel: 'wydolnosc' },
  { id: 3, firstName: 'Jarosław', lastName: 'Bezs', height: 172, weight: 90, age: 78, gender: true, przeciwwskazania: 'Nosi okulary', trainingLevel: 'poczatkujacy', cel: 'masa' },
  { id: 4, firstName: 'Alfred', lastName: 'Konik', height: 161, weight: 88, age: 33, gender: true, przeciwwskazania: 'Kuleje na lewą noge', trainingLevel: 'sredniozaawansowany', cel: 'utrzymanie' },
  { id: 5, firstName: 'Katarzyna', lastName: 'Strzelczyk', height: 199, weight: 84, age: 15, gender: false, przeciwwskazania: 'Kwitnie w niej kwiatek', trainingLevel: 'sredniozaawansowany', cel: 'masa' },
  { id: 6, firstName: 'Froddo', lastName: 'Baggins', height: 154, weight: 79, age: 28, gender: true, przeciwwskazania: 'Paraliż od pasa w dół', trainingLevel: 'zaawansowany', cel: 'wydolnosc' },
  { id: 7, firstName: 'John', lastName: 'Doe', height: 190, weight: 65, age: 26, gender: true, przeciwwskazania: '', trainingLevel: 'sredniozaawansowany', cel: 'utrzymanie' },
  { id: 8, firstName: 'Ala', lastName: 'Makota', height: 185, weight: 67, age: 32, gender: false, przeciwwskazania: 'Ćwiczy z kotem', trainingLevel: 'poczatkujacy', cel: 'masa' }
];

// Endpoint do pobrania listy osób
app.get('/osoby', (req, res) => {
  res.json(persons);
});

// Endpoint do dodawania nowej osoby
app.post('/osoby', (req, res) => {
  const newPerson = req.body;
  persons.push(newPerson);
  res.status(201).json(newPerson);
});

// Uruchomienie serwera
app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie ${port}`);
});

// Endpoint do edycji osoby
app.put('/osoby/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedPerson = req.body;
    
    // Znajdź osobę o podanym ID
    const index = persons.findIndex(person => person.id === id);
    
    // Jeśli nie znaleziono osoby o podanym ID, zwróć błąd
    if (index === -1) {
      return res.status(404).json({ message: "Osoba nie znaleziona" });
    }
    
    // Zaktualizuj dane osoby
    persons[index] = { ...persons[index], ...updatedPerson };
    
    res.json(persons[index]);
  });
  
  // Endpoint do usuwania osoby
  app.delete('/osoby/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    // Znajdź indeks osoby o podanym ID
    const index = persons.findIndex(person => person.id === id);
    
    // Jeśli nie znaleziono osoby o podanym ID, zwróć błąd
    if (index === -1) {
      return res.status(404).json({ message: "Osoba nie znaleziona" });
    }
    
    // Usuń osobę z listy
    const deletedPerson = persons.splice(index, 1)[0];
    
    res.json(deletedPerson);
  });