export type Osoba = {
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

export type Cwiczenie = {
    nazwa : string,
    partia : string,
    opis : string
}