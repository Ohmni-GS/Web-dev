import React from 'react';
import '../style/perfil.css';
import "../style/dashboard.css"
import EnergyGenerationCard from "../components/GeracaoCard";
import BatteryChargeCard from "../components/BateriaCard";
import DashboardCards from "../components/CardInfo";
import ProfileCard from "../components/ProfileCard";

const Perfil = () => {
    return (
        <div className="perfil-container">
            <div className="background"></div>
            {/* Cabeçalho */}
            <div className="perfil-header">
                <div className="perfil-avatar">
                    <img src="perfil.png" alt="Perfil" className="avatar-img" />
                    <div className="perfil-welcome">
                        <h2>Bem vindo(a) de volta!</h2>
                        <p>Bom te ver aqui, Mark Johnson</p>
                    </div>
                </div>
            </div>

            {/* Informações */}
            <div>
                <h2>Informações de Energia</h2>
                <div className="stats">
                    <BatteryChargeCard />
                    <EnergyGenerationCard />
                    <ProfileCard />

                </div>
            </div>

            {/* Plataforma Settings */}

            <div className="boxConjunta">

                <div className="platform-settings">
                    <h3>Platform Settings</h3>
                    <div className="settings-section">
                        <h4>Account</h4>
                        <div className="setting-option">
                            <label>Email me when someone follows me</label>
                            <input type="checkbox" />
                        </div>
                        <div className="setting-option">
                            <label>Email me when someone answers to my comment</label>
                            <input type="checkbox" />
                        </div>
                        <div className="setting-option">
                            <label>Email me when someone mentions me</label>
                            <input type="checkbox" />
                        </div>
                    </div>
                    <div className="settings-section">
                        <h4>Application</h4>
                        <div className="setting-option">
                            <label>New launches and projects</label>
                            <input type="checkbox" />
                        </div>
                        <div className="setting-option">
                            <label>Monthly product updates</label>
                            <input type="checkbox" />
                        </div>
                        <div className="setting-option">
                            <label>Subscribe to newsletter</label>
                            <input type="checkbox" />
                        </div>
                    </div>
                </div>

                {/* Projetos */}
                <div className="projects">
                    <h3>Consumo</h3>
                        <div className="consumo">
                            <DashboardCards />
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Perfil;
