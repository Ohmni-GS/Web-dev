import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "../style/insights.css"; // Arquivo CSS da página

const Insights = () => {
  const data = {
    labels: ["14", "15", "16", "17", "18", "19", "20", "21"],
    datasets: [
      {
        label: "Eficiência no Consumo",
        data: [6, 7, 8, 6.5, 9, 8, 7, 9],
        borderColor: "#00aaff",
        backgroundColor: "rgba(0, 170, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="insights-page">
      <div className="insights-content">
        <div className="insights-header">
          <h1>Insights</h1>
        </div>
        <div className="insights-main">
          <div className="insights-chart">
            <h2>Eficiência no Consumo</h2>
            <p>Dos últimos 7 dias</p>
            <Line data={data} options={options} />
          </div>
          <div className="insights-description">
            <p>
              O monitoramento do seu consumo de energia mostra que você está
              atingindo um nível de eficiência excelente. ⚡⚡ Isso significa que
              seus hábitos de uso estão otimizados, resultando em menor
              desperdício e mais economia. Continue assim e inspire sua
              comunidade a seguir o mesmo caminho!
            </p>
            <div className="like-icon">👍</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;