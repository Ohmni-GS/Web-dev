import React from 'react';

const CardDetalhe = ({ titulo, conteudo }) => {
  return (
    <div className="card-detalhe">
      <h3 className="card-detalhe-titulo">{titulo}</h3>
      <div className="card-detalhe-conteudo">{conteudo}</div>
    </div>
  );
};

export default CardDetalhe;
