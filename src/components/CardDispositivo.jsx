import React from 'react';
import '../style/CardDispositivo.css';

const CardDispositivo = ({ imagem, nome, descricao }) => {
  return (
    <div className="dispositivo">
      <img
        src={imagem}
        alt={nome}
        className="dispositivo-image"
      />
      <div className="dispositivo-details">
        <h2>{nome}</h2>
        <p>{descricao}</p>
      </div>
    </div>
  );
};

export default CardDispositivo;
