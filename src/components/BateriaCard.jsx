import React from "react";
import { Doughnut } from "react-chartjs-2";
import "../style/BateriaCard.css";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    LineElement,
  } from "chart.js";
  
  ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, LineElement);
  

const BatteryChargeCard = () => {
  // Configuração do gráfico
  const data = {
    datasets: [
      {
        data: [95, 5], // Valores iniciais: 95% carregada
        backgroundColor: ["#0D9FDF", "#1A1F37"], // Cor da barra
        borderWidth: 0,
        cutout: "70%", 
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false }, // Remove tooltip
    },
    rotation: 180, 
    circumference: 180, // Mostra apenas metade
  };

  return (
    <div className="battery-card">
      <p className="battery-title">Carga da bateria</p>
      <p className="battery-subtitle">Porcentagem de carga</p>
      <div className="battery-chart">
        <Doughnut data={data} options={options} />
        <div className="battery-chart-center">
          <p>95%</p>
          <span>Carregada</span>
        </div>
      </div>
    </div>
  );
};

export default BatteryChargeCard;
