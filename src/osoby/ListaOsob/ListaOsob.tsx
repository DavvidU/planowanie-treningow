import { Link } from "react-router-dom";
import { Osoba } from "../../models/models";
import React from "react";
import './ListaOsob.css'

type ListaOsobProps = {
    osoby: Osoba[];
}

function ListaOsob({ osoby, wprowadzonyTekst } : ListaOsobProps & {wprowadzonyTekst : string}){
    let przefiltrowaneOsoby : Osoba[];
    if (wprowadzonyTekst != '')
    {
        przefiltrowaneOsoby = osoby.filter((osoba) =>
        `${osoba.firstName} ${osoba.lastName}`.toLowerCase().includes(wprowadzonyTekst.toLowerCase()));
    }
    else
        przefiltrowaneOsoby = osoby;
    return(
        <div>
        {przefiltrowaneOsoby.map(osoba => (
        <div className='person-item' key={osoba.id}>
            <Link to={`/osoba/${osoba.firstName}_${osoba.lastName}`}>
            {osoba.firstName} {osoba.lastName}
            </Link>
        </div>
      ))}
    </div>
    );
  }

  export default ListaOsob;