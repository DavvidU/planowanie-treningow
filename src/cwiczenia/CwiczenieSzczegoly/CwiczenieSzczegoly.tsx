import React from "react";
import { Cwiczenie } from "../../models/models";

function CwiczenieSzczegoly({nazwa, partia, opis}: Cwiczenie){
    return(
      <div className="wybrane-cwiczenie">
      <h2>{nazwa}</h2>
      <p>Partia ciała: {partia}</p>
      <p>Opis: {opis}</p>
    </div>
    );
  }

  export default CwiczenieSzczegoly;