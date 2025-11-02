import React from 'react';

const AgendaPage = () => {
  return (
    <div>
      <div className="table-container">
        <h2>Planilha Agendamentos</h2>
        <table id="tabela-agendamentos">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail.</th>
              <th>Whatsapp</th>
              <th>Pagamento</th>
              <th>Data</th>
              <th>Status Pagamento</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgendaPage;
