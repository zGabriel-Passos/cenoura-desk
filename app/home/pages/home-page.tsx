import React from 'react';

const HomePage = () => {
  return (
    <div>
      <main className="main" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '100%', justifyContent: 'center', maxHeight: '100px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', color: 'white' }}>
          <div style={{ backgroundColor: '#000200', width: '40%', height: '100px', borderRadius: '20px', border: '1px solid #ff9b21', display: 'flex', flexDirection: 'column', padding: '10px', justifyContent: 'space-around', alignItems: 'center' }}>
            <span style={{ fontWeight: '600', fontSize: '18px' }}>Valor Recebido:</span>
            <span id="valor-recebido">R$ 1.500,00 faturados</span>
          </div>
          <div style={{ backgroundColor: '#000200', width: '40%', height: '100px', borderRadius: '20px', border: '1px solid #ff9b21', display: 'flex', flexDirection: 'column', padding: '10px', justifyContent: 'space-around', alignItems: 'center' }}>
            <span style={{ fontWeight: '600', fontSize: '18px' }}>Agendamentos Semanais:</span>
            <span id="agendamentos">N° de <u>10</u> agendamentos para esta semana </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
