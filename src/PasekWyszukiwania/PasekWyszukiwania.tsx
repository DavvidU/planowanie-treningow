import React, { Dispatch, SetStateAction } from "react";

function PasekWyszukiwania({ wprowadzonyTekst, onWprowadzonyTekstChange } : {wprowadzonyTekst : string, onWprowadzonyTekstChange : Dispatch<SetStateAction<string>>}) {
    return(
        <form>
            <input type="text" placeholder="Search..." value={wprowadzonyTekst} onChange={(e) => onWprowadzonyTekstChange(e.target.value)}/>
        </form>
    );
  }

  export default PasekWyszukiwania;