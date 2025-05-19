import React from 'react';

function VisualizarDeckPage({ deck, setCurrentPage, setDeckSelecionado }) {
  if (!deck) {
    return (
      <div className="container text-center my-5">
        <h3>Deck não encontrado.</h3>
        <button className="btn btn-secondary mt-3" onClick={() => setCurrentPage('menu')}>
          Ir para Menu
        </button>
      </div>
    );
  }

  const navegar = (pagina) => {
    setDeckSelecionado(null);     // limpa o deck selecionado
    setCurrentPage(pagina);       // muda para a página desejada
  };

  return (
    <div className="container text-center my-4">
      <h2>{deck.nome}</h2>
      <p className="text-muted">
        Total de cartas: {Object.values(deck.cartas).reduce((s, c) => s + c.quantidade, 0)}
      </p>

      <div className="row justify-content-center">
        {Object.values(deck.cartas).map((carta, i) => (
          <div key={i} className="col-md-3 mb-4">
            <img src={carta.imagem} alt={carta.nome} className="img-fluid cardimg" />
            <h5 className="mt-2">{carta.nome}</h5>
            <p>{carta.tipo} - {carta.cor}</p>
            <p><strong>x{carta.quantidade}</strong></p>
          </div>
        ))}
      </div>

      <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
        <button className="btn btn-secondary" onClick={() => navegar('meus-decks')}>
          ← Voltar para Meus Decks
        </button>
        <button className="btn btn-outline-primary" onClick={() => navegar('menu')}>
          Ir para Menu
        </button>
        <button className="btn btn-outline-success" onClick={() => navegar('colecao')}>
          Minha Coleção
        </button>
        <button className="btn btn-outline-warning" onClick={() => navegar('pesquisar')}>
          Pesquisar Cartas
        </button>
      </div>
    </div>
  );
}

export default VisualizarDeckPage;
