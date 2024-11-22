import React from 'react';

const ConsumoAtual = ({ corrente, tensao, consumo }) => {
  return (
    <div className="consumo-atual">
      <h3>Consumo Atual</h3>
      <div>
        <p>Corrente: {corrente} A</p>
        <p>Tensão: {tensao} V</p>
        <h4>{consumo} Wh</h4>
      </div>
    </div>
  );
};

export default ConsumoAtual;
