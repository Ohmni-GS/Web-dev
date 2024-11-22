import React from 'react';

const DispositivosDetalhe = ({ dispositivos }) => {
  return (
    <div className="dispositivos-detalhe">
      <h3>Dispositivos</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dispositivos.map((dispositivo, index) => (
            <tr key={index}>
              <td>{dispositivo.id}</td>
              <td>{dispositivo.medindo}</td>
              <td>{dispositivo.status}</td>
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DispositivosDetalhe;
