import React, { useEffect, useState } from 'react';

const MeusDecksPage = ({ setCurrentPage, setDeckSelecionado }) => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/decks')
      .then((res) => res.json())
      .then((data) => setDecks(data))
      .catch((err) => console.error('Erro ao buscar decks:', err));
  }, []);

  const removerDeck = (id) => {
  console.log('Tentando remover deck com ID:', id);

  fetch(`http://localhost:3001/decks/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      console.log('Resposta:', res);
      if (!res.ok) {
        throw new Error(`Erro HTTP: ${res.status}`);
      }
      setDecks((prev) => prev.filter((d) => d.id !== id));
      alert('Deck removido com sucesso.');
    })
    .catch((err) => {
      console.error('Erro ao remover deck:', err);
      alert('Erro ao remover deck: ' + err.message);
    });
};


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
            <div
              key={deck.id}
              className="card shadow-sm"
              style={{ cursor: 'pointer' }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  onClick={() => {
                    setDeckSelecionado(deck);
                    setCurrentPage('visualizar-deck');
                  }}
                >
                  {deck.nome}
                </h5>
                <p className="card-text">{Object.keys(deck.cartas).length} cartas</p>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                  Criado em: {new Date(deck.criadoEm).toLocaleDateString()}
                </p>
                <button
                  className="btn btn-sm btn-outline-danger mt-2"
                  onClick={(e) => {
                    e.stopPropagation(); // evita acionar o clique do card
                    removerDeck(deck.id);
                  }}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MeusDecksPage;