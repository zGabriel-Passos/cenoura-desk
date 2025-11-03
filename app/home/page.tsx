'use client'
import React, { useState } from 'react';
import style from './styles.module.css';
import Theme from '../../public/icons/theme';
import Sidemenu from '../components/sidemenu';
import HomePage from './pages/home-page';
import AgendaPage from './pages/agenda-page';
import ProdutosPage from './pages/produtos-page';
import ConfigPage from './pages/config-page';

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
            default:
                return <HomePage />;
        }
    };

    return (
        <div>
            <header style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px' }}>
                <h3 style={{ cursor: 'default' }}>🥕 Desk <span style={{ fontSize: '14px', fontWeight: '100', color: '#ff9b21' }}>- em beta</span></h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button id="theme" style={{ all: 'unset', cursor: 'pointer' }}>
                        <Theme />
                    </button>
                    <span style={{ fontSize: '12px', cursor: 'default' }} id='mode'>🟢 Dev Mode</span>
                    <div className='perfil' style={{ fontSize: '12px', backgroundColor: '#0f0f0f', padding: '8px', borderRadius: '20px', border: '2px solid rgba(255, 155, 33, 0.53)', width: '160px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', cursor: 'pointer' }}>
                        <span id='username' style={{ cursor: 'pointer' }}>miniruok109@gm...</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                    </div>
                </div>
            </header>
            <main>
                <div
                    className={style.tabs}
                    style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
                    <button
                        type="button"
                        className={currentPage === 'Home' ? `${style.active}` : ''}
                        onClick={() => setCurrentPage('Home')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path></svg>
                        <span>Home</span>
                    </button>
                    <button
                        type="button"
                        className={currentPage === 'Produtos' ? `${style.active}` : ''}
                        onClick={() => setCurrentPage('Produtos')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path></svg>
                        <span>Dashboard</span>
                    </button>
                    <button
                        type="button"
                        className={currentPage === 'Agenda' ? `${style.active}` : ''}
                        onClick={() => setCurrentPage('Agenda')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,128Zm-88,0a12,12,0,1,1-12-12A12,12,0,0,1,96,128Z"></path></svg>
                        <span>Outro</span>
                    </button>
                </div>
                <div style={{ margin: 20 }}>
                    {renderPage()}
                </div>
            </main>
        </div >
    );
};
export default Page;