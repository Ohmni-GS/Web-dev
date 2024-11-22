// Dispositivos.jsx
import React from 'react';
import CardDispositivo from '../components/CardDispositivo';
import '../style/Dispositivos.css';
import "../style/dashboard.css"

const Dispositivos = () => {
  const dispositivo = {
    imagem: './public/dispositivo.png', // Substitua pelo caminho correto
    nome: 'Nome do Dispositivo',
    descricao:
      'Os controladores de carga ou carregadores ficam entre os painéis e as baterias e são utilizados para controlar a voltagem de entrada nelas, evitando sobrecargas ou descargas excessivas, otimizando e prolongando a sua vida útil.',
  };

  return (
    <>
      <div className="background"></div>

        <header className="header">
        <h2>Menu / Dispositivos</h2>
        <h1>Dispositivos</h1>
        <input type="text" placeholder="🔍 Pesquisar Dispositivo" className="search-input" />
      </header>

    <div className="dispositivos-container">

      <h1>Dispositivos na sua comunidade</h1>
      <CardDispositivo
        imagem={dispositivo.imagem}
        nome={dispositivo.nome}
        descricao={dispositivo.descricao}
        />
    </div>


    
        </>
  );
};

export default Dispositivos;
