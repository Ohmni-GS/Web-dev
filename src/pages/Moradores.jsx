import React from "react";
import "../style/moradores.css";

const Moradores = () => {
  const moradores = [
    { id: 255, nome: "Esthera Jackson", email: "esthera@simmple.com", permissao: "Gerenciador" },
    { id: 272, nome: "Alexa Liras", email: "alexa@simmple.com", permissao: "Morador" },
    { id: 255, nome: "Esthera Jackson", email: "esthera@simmple.com", permissao: "Morador" },
    { id: 272, nome: "Alexa Liras", email: "alexa@simmple.com", permissao: "Morador" },
    { id: 255, nome: "Esthera Jackson", email: "esthera@simmple.com", permissao: "Morador" },
    { id: 272, nome: "Alexa Liras", email: "alexa@simmple.com", permissao: "Morador" },
  ];

  return (
    <div className="moradores-container">
      <header className="header">
        <h2>Menu / Moradores</h2>
        <h1>Moradores</h1>
        <input type="text" placeholder="🔍 Pesquisar morador" className="search-input" />
      </header>
      <div className="table-container">
        <table className="moradores-table">
          <thead>
            <tr>
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
                      <p className="morador-nome">{morador.nome}</p>
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
      <button className="adicionar-morador">
        <span>👤➕</span>
        ADICIONAR MORADOR À COMUNIDADE
      </button>
    </div>
  );
};

export default Moradores;
