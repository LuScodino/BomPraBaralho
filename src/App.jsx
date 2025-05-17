import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProfilePopup from './components/ProfilePopup';
import AddPopup from './components/AddPopup';

import MenuPage from './pages/MenuPage';
import ColecaoPage from './pages/ColecaoPage';
import MeusDecksPage from './pages/MeusDecksPage';
import ComunidadePage from './pages/ComunidadePage';
import PesquisarCartasPage from './pages/PesquisarCartasPage';
import CriarDeckPage from './pages/CriarDeckPage';

function App() {
  const [currentPage, setCurrentPage] = useState('menu');
  const [showProfile, setShowProfile] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'menu': return <MenuPage />;
      case 'colecao': return <ColecaoPage setCurrentPage={setCurrentPage} />;
      case 'meus-decks': return <MeusDecksPage setCurrentPage={setCurrentPage} />;
      case 'comunidade': return <ComunidadePage />;
      case 'pesquisar': return <PesquisarCartasPage />;
      case 'criar-deck': return <CriarDeckPage />;
      default: return <MenuPage />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Sidebar
        show={showSidebar}
        setShow={setShowSidebar}
        setCurrentPage={setCurrentPage}
      />
      <ProfilePopup show={showProfile} setShow={setShowProfile} />
      <AddPopup show={showAdd} setShow={setShowAdd} setCurrentPage={setCurrentPage} />

      <button id="prof-btn" className="btn btn-dark position-fixed top-0 end-0 m-3 rounded-circle" onClick={() => setShowProfile(true)}>
        👤
      </button>

      <button id="menu-btn" className="btn btn-dark position-fixed top-0 start-0 m-4" onClick={() => setShowSidebar(true)}>
        ☰
      </button>

      <main className="container my-4 text-center">
        {renderPage()}
      </main>

      {currentPage === 'meus-decks' && (
        <button id="addbtn" className="btn btn-dark position-fixed bottom-0 end-0 m-4 rounded-circle" onClick={() => setCurrentPage('criar-deck')}>
          ➕
        </button>
      )}
    </div>
  );
}

export default App;
