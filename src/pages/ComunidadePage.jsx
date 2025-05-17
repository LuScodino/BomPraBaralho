import React, { useEffect, useState } from 'react';

const ComunidadePage = () => {
  const [novos, setNovos] = useState([]);
  const [melhores, setMelhores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/decksNovos')
      .then((res) => res.json())
      .then(setNovos);

    fetch('http://localhost:3001/decksMelhores')
      .then((res) => res.json())
      .then(setMelhores);
  }, []);

  return (
    <>
      <h1>DECKS NOVOS</h1>
      <div className="slider-container mt-3 mb-5">
        {novos.map((item, i) => (
          <img key={i} className="cardimg rounded img-fluid" src={item.imagem} alt={item.nome} />
        ))}
      </div>

      <h1 className="mt-5">DECKS MAIS BEM AVALIADOS</h1>
      <div className="slider-container mt-3">
        {melhores.map((item, i) => (
          <img key={i} className="cardimg rounded img-fluid" src={item.imagem} alt={item.nome} />
        ))}
      </div>
    </>
  );
};

export default ComunidadePage;
