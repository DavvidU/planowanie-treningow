import { Cwiczenie, Osoba } from "../models/models";
import { BazaCwiczen } from './../data/cwiczeniaData'

function GetCwiczenia(): Cwiczenie[] {
    let wszystkieCwiczenia : Cwiczenie[] = BazaCwiczen;
    return wszystkieCwiczenia;
  }

function GetCwiczeniaDzienUpperBody(osoba: Osoba | null): Cwiczenie[] {
    let wszystkieCwiczenia : Cwiczenie[] = BazaCwiczen;
    
    if (osoba == null) { return GetCwiczenia();}
    
    let cwiczeniaUpperBody : Cwiczenie[] = [];

    if (osoba.trainingLevel != 'poczatkujacy') { cwiczeniaUpperBody.push(wszystkieCwiczenia[0]); }
    else { cwiczeniaUpperBody.push(wszystkieCwiczenia[2]); }

    if (osoba.cel == 'wydolnosc' || osoba.cel == 'redukcja') { cwiczeniaUpperBody.push(wszystkieCwiczenia[3]); }
    else { cwiczeniaUpperBody.push(wszystkieCwiczenia[1]); }
    
    return cwiczeniaUpperBody;
  }

function GetCwiczeniaDzienBrzucha(osoba: Osoba | null): Cwiczenie[] {
    let wszystkieCwiczenia : Cwiczenie[] = BazaCwiczen;
    
    if (osoba == null) { return GetCwiczenia();}
    
    let cwiczeniaBrzucha : Cwiczenie[] = [];
    
    if (osoba.trainingLevel != 'poczatkujacy') { cwiczeniaBrzucha.push(wszystkieCwiczenia[5]); }
    else { cwiczeniaBrzucha.push(wszystkieCwiczenia[4]); }

    if (osoba.cel == 'wydolnosc' || osoba.cel == 'redukcja') { cwiczeniaBrzucha.push(wszystkieCwiczenia[7]); }
    else { cwiczeniaBrzucha.push(wszystkieCwiczenia[6]); }
    
    return cwiczeniaBrzucha;
  }

function GetCwiczeniaDzienLowerBody(osoba: Osoba | null): Cwiczenie[] {
    let wszystkieCwiczenia : Cwiczenie[] = BazaCwiczen;
    
    if (osoba == null) { return GetCwiczenia();}
    
    let cwiczeniaLowerBody : Cwiczenie[] = [];

    if (osoba.trainingLevel != 'poczatkujacy') { cwiczeniaLowerBody.push(wszystkieCwiczenia[11]); }
    else { cwiczeniaLowerBody.push(wszystkieCwiczenia[8]); }

    if (osoba.cel == 'wydolnosc' || osoba.cel == 'redukcja') { cwiczeniaLowerBody.push(wszystkieCwiczenia[10]); }
    else { cwiczeniaLowerBody.push(wszystkieCwiczenia[9]); }
    
    return cwiczeniaLowerBody;
  }

export {GetCwiczenia, GetCwiczeniaDzienUpperBody, GetCwiczeniaDzienBrzucha, GetCwiczeniaDzienLowerBody};