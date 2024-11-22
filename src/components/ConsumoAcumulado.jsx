import React from 'react';

const ConsumoAcumulado = ({ mediaKWh, consumoTotal, grafico }) => {
  return (
    <div className="consumo-acumulado">
      <h3>Consumo Acumulado</h3>
      <p>Média de KWh: {mediaKWh}</p>
      <p>Consumo Total: {consumoTotal}</p>
      <div className="grafico">{grafico}</div>
    </div>
  );
};

export default ConsumoAcumulado;
