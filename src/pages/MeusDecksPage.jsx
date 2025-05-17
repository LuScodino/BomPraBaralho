import React, { useEffect, useState } from 'react';

const MeusDecksPage = ({ setCurrentPage }) => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/decks')
      .then((res) => res.json())
      .then((data) => setDecks(data))
      .catch((err) => console.error('Erro ao buscar decks:', err));
  }, []);

  return (
    <div className="container my-4 text-center">
      <h2>Meus Decks</h2>
      {decks.length === 0 ? (
        <div className="mt-4">
          <p className="text-muted">Você ainda não criou nenhum deck.</p>
          <button
            className="btn btn-primary"
            onClick={() => setCurrentPage('criar-deck')}
          >
            Criar novo Deck
          </button>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
          {decks.map((deck) => (
            <div key={deck.id} className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{deck.nome}</h5>
                <p className="card-text">{Object.keys(deck.cartas).length} cartas</p>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                  Criado em: {new Date(deck.criadoEm).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MeusDecksPage;
