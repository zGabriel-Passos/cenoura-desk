'use client'
import React, { useState } from 'react';
import Sidemenu from '../components/sidemenu';
import HomePage from './pages/home-page';
import AgendaPage from './pages/agenda-page';
import ProdutosPage from './pages/produtos-page';
import ConfigPage from './pages/config-page';
import NotaPage from './pages/nota-page';
import ClientesPage from './pages/clientes-page';
import LinksPagamentoPage from './pages/links-pagamento-page';

const Page = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <HomePage />;
            case 'Agenda':
                return <AgendaPage />;
            case 'Produtos':
                return <ProdutosPage />;
            case 'Config':
                return <ConfigPage />;
            case 'Nota':
                return <NotaPage />;
            case 'Clientes':
                return <ClientesPage />;
            case 'Links de pagamento':
                return <LinksPagamentoPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div>
            <header style={{ backgroundColor: 'black', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid rgba(255, 155, 33, 0.36)' }}>
                <h3>🥕 Desk</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button id="theme" style={{ all: 'unset', cursor: 'pointer' }}>🌙</button>
                    <div className='perfil' style={{ fontSize: '12px', backgroundColor: '#0f0f0f', padding: '8px', borderRadius: '20px', border: '1px solid #ff9b21' }}>
                        <span id='username' style={{ cursor: 'pointer' }}>miniruok109@g...</span>
                    </div>
                </div>
            </header>
            <div style={{ height: '100vh', display: 'flex', flexDirection: "row" }}>
                <div className="left" style={{ width: '180px', height: '100%', backgroundColor: 'black', borderRight: '1px solid rgba(255, 155, 33, 0.34)', display: 'flex', justifyContent: 'center', paddingRight: '20px' }}>
                    <Sidemenu onPageChange={setCurrentPage} />
                </div>
                <div className="right" style={{ width: '100%', height: '100%', backgroundColor: '#0f0f0f', padding: '10px' }}>
                    {renderPage()}
                </div>
            </div>
        </div >
    );
};

export default Page;