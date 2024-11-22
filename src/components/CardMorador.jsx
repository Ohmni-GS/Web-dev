import React from "react";
import { Link } from 'react-router-dom';

const CardMoradores = ({ moradores }) => {
  return (
    <div className="table-container">
      <table className="moradores-table">
        <thead>
          <tr className="titulos">
            <th>Nome</th>
            <th>Permissão</th>
            <th>ID</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {moradores.map((morador, index) => (
            <tr key={index}>
<td>
  <div className="morador-info">
    <div className="morador-avatar">👤</div>
    <div>
      {/* Adicionando o Link ao nome do morador */}
      <p className="morador-nome">
        <Link to={`/moradores/${morador.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          {morador.nome}
        </Link>
      </p>
      <p className="morador-email">{morador.email}</p>
    </div>
  </div>
</td>
              <td>{morador.permissao}</td>
              <td>{morador.id}</td>
              <td className="acoes">
                <button className="editar">Editar</button>
                <button className="excluir">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardMoradores;
