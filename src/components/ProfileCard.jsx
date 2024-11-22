import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../style/profileCard.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-card-content">
        <p className="profile-card-welcome">Bem vindo de volta,</p>
        <h2 className="profile-card-username">Nome do user</h2>
        <p className="profile-card-role">ADMINISTRADOR</p>
        <a href="/perfil" className="profile-card-link">
          Ir ao Perfil <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
