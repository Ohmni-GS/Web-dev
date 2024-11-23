import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../style/profileCard.css";

const ProfileCard = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch(
          "https://6741208ed0b59228b7f24fc8.mockapi.io/OHMNI/V1/users"
        );
        const result = await response.json();
        if (result.length > 0) {
          // Considera apenas o primeiro item da resposta
          setUserName(result[0].name);
        }
      } catch (error) {
        console.error("Erro ao buscar o nome do usuário:", error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <div className="profile-card">
      <div className="profile-card-content">
        <p className="profile-card-welcome">Bem vindo de volta,</p>
        <h2 className="profile-card-username">
          {userName || "Carregando..."}
        </h2>
        <p className="profile-card-role">ADMINISTRADOR</p>
        <a href="/perfil" className="profile-card-link">
          Ir ao Perfil <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;