import React from 'react';

type Cwiczenie = {
    nazwa : string,
    partia : string,
    opis : string
  }

  type ListaCwiczenProps = {
    cwiczenia: Cwiczenie[];
  };
  
  /* Baza cwiczen */
   const BazaCwiczen : Cwiczenie[] = [
    { nazwa: 'Wyciskanie na lawce', partia: 'Klatka piersiowa', opis: 'Połóż się stabilnie, pionowo wypchnij sztangę' },
    { nazwa: 'Wyciskanie żołnierskie (OHP)', partia: 'Barki', opis: 'Stań prosto i wypchaj sztangę pionowo w górę' },
    { nazwa: 'Uginanie ramion z hantlami', partia: 'Bicepsy', opis: 'Zachowaj niezmienną, pionową pozycję ciała' },
    { nazwa: 'Pompki na poręczach (dipy)', partia: 'Tricepsy', opis: 'Schodząc w dół nie osiągaj zgięcia 90 stopni w łokciu' },
    { nazwa: 'Hollow body', partia: 'Proste brzucha', opis: 'Połóż się na podłodze i wznieś nogi i ręce siłą mięśni brzucha' },
    { nazwa: 'Deska (Plank)', partia: 'Głębokie brzucha', opis: 'Oprzyj się na łokciach na podłodze i urzymaj pozycję, napnij brzuch' },
    { nazwa: 'Przyciąganie kolan w zwisie', partia: 'Proste brzucha', opis: 'Zawiśnij na drążku i przyciągaj kolana siłą mięśni brzucha' },
    { nazwa: 'Skłony rosyjskie', partia: 'Skośne brzucha', opis: 'Usiądź, złap ciężar w dłonie i przenoś go nad nogami od lewej do prawej' },
    { nazwa: 'Przysiady ze sztangą', partia: 'Uda', opis: 'Połóż sztangę na ramionach i zrób przysiad. Zepnij brzuch i pośladki.' },
    { nazwa: 'Martwy ciąg', partia: 'Uda', opis: 'Połóż sztangę na ziemi i stojąc nad nią przyciągaj ją do miednicy' },
    { nazwa: 'Hip thrust', partia: 'Pośladki', opis: 'Oprzyj plecy na podwyższeniu, połóż sztangę na miednicy i wypychaj ją.' },
    { nazwa: 'Przysiad bułgarski', partia: 'Czworogłowy uda', opis: 'Złap za hantle i klękaj a następnie wstawaj.' }
    ];
  
  /* Cwiczenie */
  
  function Cwiczenie({nazwa, partia, opis}: Cwiczenie){
    return(
      <div className="wybrane-cwiczenie">
      <h2>{nazwa}</h2>
      <p>Partia ciała: {partia}</p>
      <p>Opis: {opis}</p>
    </div>
    );
  }
  
  function ListaCwiczen({ cwiczenia }: ListaCwiczenProps){
    return(
      <div>
        {cwiczenia.map(cwiczenie => (
          <div className='cwiczenie-item' key={cwiczenie.nazwa}>
            <Cwiczenie nazwa={cwiczenie.nazwa} partia={cwiczenie.partia} opis={cwiczenie.opis}/>
          </div>
        ))}
      </div>
    );
  }

  function StronaGlownaCwiczenia() {
    return(
        <ListaCwiczen cwiczenia={BazaCwiczen}/>
    );
  }

export {StronaGlownaCwiczenia};
