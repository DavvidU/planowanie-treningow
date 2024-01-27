import React from "react";
import { Cwiczenie } from "../../models/models";
import CwiczenieSzczegoly from "../CwiczenieSzczegoly/CwiczenieSzczegoly";

type ListaCwiczenProps = {
    cwiczenia: Cwiczenie[];
  };

function ListaCwiczen({ cwiczenia, wprowadzonyTekst }: ListaCwiczenProps & {wprowadzonyTekst : string} ){
    let przefiltrowaneCwiczenia : Cwiczenie[];
    if (wprowadzonyTekst != '')
    {
        przefiltrowaneCwiczenia = cwiczenia.filter((cwiczenie) =>
        cwiczenie.nazwa.toLowerCase().includes(wprowadzonyTekst.toLowerCase()));
    }
    else
        przefiltrowaneCwiczenia = cwiczenia;

    return(
      <div>
        {przefiltrowaneCwiczenia.map(cwiczenie => (
          <div className='cwiczenie-item' key={cwiczenie.nazwa}>
            <CwiczenieSzczegoly nazwa={cwiczenie.nazwa} partia={cwiczenie.partia} opis={cwiczenie.opis}/>
          </div>
        ))}
      </div>
    );
  }

  export default ListaCwiczen;