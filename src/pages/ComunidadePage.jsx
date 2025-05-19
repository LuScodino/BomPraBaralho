import React, { useEffect, useState } from 'react';

const ComunidadePage = ({ setDeckSelecionado, setCurrentPage }) => {
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

  const visualizarDeck = (nome) => {
    fetch('http://localhost:3001/decks')
      .then((res) => res.json())
      .then((todos) => {
        const deck = todos.find((d) => d.nome === nome);
        if (deck) {
          setDeckSelecionado(deck);
          setCurrentPage('visualizar-deck');
        }
      });
  };

  return (
    <>
      <h1 className="text-center mt-4">DECKS NOVOS</h1>
      <div className="slider-destaque">
        {novos.map((item, i) => (
          <img
            key={i}
            src={item.imagem}
            alt={item.nome}
            className="img-fluid"
            onClick={() => visualizarDeck(item.nome)}
          />
        ))}
      </div>

      <h1 className="text-center mt-5">DECKS MAIS BEM AVALIADOS</h1>
      <div className="slider-destaque">
        {melhores.map((item, i) => (
          <img
            key={i}
            src={item.imagem}
            alt={item.nome}
            className="img-fluid"
            onClick={() => visualizarDeck(item.nome)}
          />
        ))}
      </div>
    </>
  );
};

export default ComunidadePage;
