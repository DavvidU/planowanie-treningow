import React, { useState } from 'react';
import ListaCwiczen from './ListaCwiczen/ListaCwiczen';
import { BazaCwiczen } from './../data/cwiczeniaData'
import PasekWyszukiwania from '../PasekWyszukiwania/PasekWyszukiwania';

/* type Cwiczenie @@@@@@@@@@@@@@@@@*/


  /* type ListaCwiczenProps @@@@@@@@@@*/

  
  
  /* Baza cwiczen @@@@@@@@@@@@@@@@@@*/
 
  
  
  /* CwiczenieSzczegoly @@@@@@@@@@@@*/
  
  

  /* ListaCwiczen @@@@@@@@@@*/
  
  

  function StronaGlownaCwiczenia() {
    const [wprowadzonyTekst, setWprowadzonyTekst] = useState('');
    return(
      <div>
          <PasekWyszukiwania wprowadzonyTekst ={wprowadzonyTekst} onWprowadzonyTekstChange={setWprowadzonyTekst}/>
          <ListaCwiczen cwiczenia={BazaCwiczen} wprowadzonyTekst={wprowadzonyTekst}/>
      </div>
    );
  }

export {StronaGlownaCwiczenia};
