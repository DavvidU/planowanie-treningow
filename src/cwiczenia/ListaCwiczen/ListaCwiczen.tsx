import React from "react";
import { Cwiczenie } from "../../models/models";
import CwiczenieSzczegoly from "../CwiczenieSzczegoly/CwiczenieSzczegoly";

type ListaCwiczenProps = {
    cwiczenia: Cwiczenie[];
  };

function ListaCwiczen({ cwiczenia }: ListaCwiczenProps){
    return(
      <div>
        {cwiczenia.map(cwiczenie => (
          <div className='cwiczenie-item' key={cwiczenie.nazwa}>
            <CwiczenieSzczegoly nazwa={cwiczenie.nazwa} partia={cwiczenie.partia} opis={cwiczenie.opis}/>
          </div>
        ))}
      </div>
    );
  }

  export default ListaCwiczen;