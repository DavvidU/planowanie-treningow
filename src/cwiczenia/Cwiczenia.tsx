import React from 'react';
import ListaCwiczen from './ListaCwiczen/ListaCwiczen';
import { BazaCwiczen } from './../data/cwiczeniaData'

/* type Cwiczenie @@@@@@@@@@@@@@@@@*/


  /* type ListaCwiczenProps @@@@@@@@@@*/

  
  
  /* Baza cwiczen @@@@@@@@@@@@@@@@@@*/
 
  
  
  /* CwiczenieSzczegoly @@@@@@@@@@@@*/
  
  

  /* ListaCwiczen @@@@@@@@@@*/
  
  

  function StronaGlownaCwiczenia() {
    return(
        <ListaCwiczen cwiczenia={BazaCwiczen}/>
    );
  }

export {StronaGlownaCwiczenia};
