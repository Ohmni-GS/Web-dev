import React from "react";
import "../style/moradores.css";
import "../style/dashboard.css";
import CardMoradores from "../components/CardMorador"; 

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
      <div className="background"></div>
      <header className="header">
        <h2>Menu / Moradores</h2>
        <h1>Moradores</h1>
        <input type="text" placeholder="🔍 Pesquisar morador" className="search-input" />
      </header>


      <CardMoradores moradores={moradores} />

      <button className="adicionar-morador">
        <span>👤➕</span>
        ADICIONAR MORADOR À COMUNIDADE
      </button>
    </div>
  );
};

export default Moradores;
