import React, { useEffect, useState } from 'react';

const MenuPage = () => {
  const [novidades, setNovidades] = useState([]);
  const [decksSemana, setDecksSemana] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/novidades')
      .then((res) => res.json())
      .then(setNovidades);
    fetch('http://localhost:3001/decksSemana')
      .then((res) => res.json())
      .then(setDecksSemana);
    fetch('http://localhost:3001/favoritos')
      .then((res) => res.json())
      .then(setFavoritos);
  }, []);

  return (
    <>
      <h1>NOVIDADES EM MTG</h1>
      <div className="slider-container mt-3 mb-5">
        {novidades.map((item, i) => (
          <img key={i} src={item.imagem} alt={item.nome} />
        ))}
      </div>

      <h1 className="mt-5">DECKS QUENTES DA SEMANA</h1>
      <div className="slider-container mt-3 mb-5">
        {decksSemana.map((item, i) => (
          <img key={i} src={item.imagem} alt={item.nome} />
        ))}
      </div>

      <h1 className="mt-5">DECKS FAVORITOS DE TODOS OS TEMPOS</h1>
      <div className="slider-container mt-3">
        {favoritos.map((item, i) => (
          <img key={i} src={item.imagem} alt={item.nome} />
        ))}
      </div>
    </>
  );
};

export default MenuPage;