import React from "react";
import { Doughnut } from "react-chartjs-2";
import "../style/BateriaCard.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BatteryChargeCard = () => {
  const data = {
    datasets: [
      {
        data: [95, 5], // Valores do gráfico
        backgroundColor: [
          "rgba(13, 159, 223, 1)", // Cor do progresso
          "rgba(26, 31, 55, 1)", // Cor de fundo
        ],
        borderWidth: 0,
        cutout: "70%", // Donut com centro vazio
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false },
    },
    rotation: 180,
    circumference: 180, // Gráfico semicircular
  };

  return (
    <div className="battery-card">
      <p className="battery-title">Carga da bateria</p>
      <p className="battery-subtitle">Porcentagem de carga</p>
      <div className="battery-chart-container">
      <p className="battery-percentage">95%</p>
        <div className="battery-chart">
          <Doughnut data={data} options={options} />
          <div className="battery-chart-labels">
            <span className="battery-chart-0">0%</span>
            <span className="battery-chart-100">100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatteryChargeCard;
