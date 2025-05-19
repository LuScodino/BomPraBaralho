import React, { useEffect, useState } from 'react';

const MenuPage = ({ setDeckSelecionado, setCurrentPage }) => {
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
      <h1 className="mt-4 text-center">NOVIDADES EM MTG</h1>
      <div className="slider-destaque">
        {novidades.map((item, i) => (
          <img
            key={i}
            src={item.imagem}
            alt={item.nome}
            onClick={() => {
              fetch('http://localhost:3001/decks')
                .then((res) => res.json())
                .then((todos) => {
                  const deck = todos.find((d) => d.nome === item.nome);
                  if (deck) {
                    setDeckSelecionado(deck);
                    setCurrentPage('visualizar-deck');
                  }
                });
            }}
          />
        ))}
      </div>

      <h1 className="mt-5 text-center">DECKS QUENTES DA SEMANA</h1>
      <div className="slider-destaque">
        {decksSemana.map((item, i) => (
          <img
            key={i}
            src={item.imagem}
            alt={item.nome}
            onClick={() => {
              fetch('http://localhost:3001/decks')
                .then((res) => res.json())
                .then((todos) => {
                  const deck = todos.find((d) => d.nome === item.nome);
                  if (deck) {
                    setDeckSelecionado(deck);
                    setCurrentPage('visualizar-deck');
                  }
                });
            }}
          />
        ))}
      </div>

      <h1 className="mt-5 text-center">DECKS FAVORITOS DE TODOS OS TEMPOS</h1>
      <div className="slider-destaque">
        {favoritos.map((item, i) => (
          <img
            key={i}
            src={item.imagem}
            alt={item.nome}
            onClick={() => {
              fetch('http://localhost:3001/decks')
                .then((res) => res.json())
                .then((todos) => {
                  const deck = todos.find((d) => d.nome === item.nome);
                  if (deck) {
                    setDeckSelecionado(deck);
                    setCurrentPage('visualizar-deck');
                  }
                });
            }}
          />
        ))}
      </div>
    </>
  );
};

export default MenuPage;