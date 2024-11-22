import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "../style/GeracaoCard.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

// Registro das dependências do Chart.js
ChartJS.register(ArcElement, Tooltip);

const EnergyGenerationCard = () => {
  // Estados dos dados 
  const [corrente, setCorrente] = useState(0);
  const [tensao, setTensao] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ohmni-api.onrender.com/devices/00C40A24/latest");
        const data = await response.json();
        setCorrente(data.corrente);
        setTensao(data.tensao);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      } finally {
        setLoading(false);
      }
    };

    // Executa a primeira busca imediatamente
    fetchData();

    // Atualiza os dados a cada 5 segundos
    const intervalId = setInterval(fetchData, 5000);

    // Limpar o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  // gráfico de Corrente
  const correnteData = {
    labels: [""], // ESSA BOSTA N SAI
    datasets: [
      {
        data: [corrente, 10 - corrente], 
        backgroundColor: ["#0D9FDF", "#1a1d29"], 
        hoverBackgroundColor: ["#0B7FBD", "#1a1d29"], 
        borderWidth: 0,
      },
    ],
  };

  // Dados para o gráfico de Tensão
  const tensaoData = {
    datasets: [
      {
        data: [tensao, 10 - tensao], // Tensão e restante
        backgroundColor: ["#12F298", "#1a1d29"], 
        hoverBackgroundColor: ["#0FBF88", "#1a1d29"], 
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="energy-card">
      <p className="energy-title">Geração de Energia</p>
      {loading ? (
        // Exibe mensagem de carregamento enquanto os dados não estão disponíveis
        <p>Carregando...</p>
      ) : (
        <>
          <div className="energy-values">
            <div>
              <p className="energy-value-title">CORRENTE</p>
              <p className="energy-value">{corrente} A (imp)</p>
              <Doughnut
                data={correnteData}
                options={{
                  plugins: { tooltip: { enabled: false } }, 
                  cutout: "80%", // Estilo 
                }}
                className="energy-chart"
              />
            </div>
            <div>
              <p className="energy-value-title">TENSÃO</p>
              <p className="energy-value">{tensao} V (vmp)</p>
              <Doughnut
                data={tensaoData}
                options={{
                  plugins: { tooltip: { enabled: false } }, 
                  cutout: "80%", //  donut
                }}
                className="energy-chart"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EnergyGenerationCard;