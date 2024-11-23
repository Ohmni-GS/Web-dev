# OHMNI

Este projeto foi desenvolvido como parte de uma atividade prática de desenvolvimento utilizando React com o Vite. O objetivo foi aplicar conceitos fundamentais como componentização, gerenciamento de estados, uso de rotas dinâmicas, armazenamento local de dados e integração com APIs externas.

## Integrantes do Grupo  
- **Marcela Torro** - RM557658  
- **Matheus Vinícius** - RM555177  
- **Matheus Queiroz Zanutin** - RM558801  

---

## 🌟 Ideia do Projeto  

**Ohmni** é uma plataforma voltada para melhorar a eficiência energética de comunidades remotas, reduzindo o consumo e promovendo a sustentabilidade.  

A plataforma funciona com a instalação de um dispositivo junto à placa solar da comunidade, que monitora dados como:  
- Consumo de energia  
- Eficiência energética  
- Carga das baterias  
- Geração de energia  

Esses dados são enviados para um dashboard, onde os usuários podem acompanhar seu consumo em tempo real e receber sugestões automáticas para otimizar a eficiência energética.  

O nome **Ohmni** combina:  
- **Ohm**: unidade de resistência elétrica  
- **Omni**: abrangência e conectividade  

---

## 🛠️ Tecnologias Utilizadas  
- **React**: Biblioteca principal para construção da interface.  
- **Vite**: Ferramenta de build para desenvolvimento rápido e eficiente.  
- **LocalStorage**: Para armazenamento persistente de dados no navegador.  
- **Fetch API**: Para comunicação com serviços externos e manipulação de dados.  

---
# Fizemos nosso própio BAK-END
Mas não implementamos por completos pois faltou tempo para desenvolver mais o nosso site WEB. nossa Api tem toda uma lógica por trás, então não seria possivel utilizar ela sem ter toda a aplicação pronta.
Ainda assim no card de GERAÇÃO 'src/components/GeracaoCard.jsx', utilizamos nossa propia api e banco de dados. Isso só foi possivel pois tivemos que fazer uma ligação direta, para a entrega de EDGE.
Então utilizamos o mock-api nos outros cards, para pelo menos garantir a sua avaliação.

## AQUI ESTÁ O LINK DO banco de dadaos que fizemos: https://ohmni-api.onrender.com/#/

---

## 📂 Funcionalidades Implementadas  

### **1. Componentização**  
A interface foi estruturada em componentes reutilizáveis, promovendo boas práticas de organização e modularidade no código.  

#### 📷 ![image](https://github.com/user-attachments/assets/09d7ccd7-18c4-41de-a52d-85718d4c581a)
  
**Arquivos:** `src/components/`   

---

### **2. Gerenciamento de Estados com Props**  
Os estados são gerenciados de forma centralizada e compartilhados entre os componentes através de props, garantindo uma comunicação eficiente e lógica no projeto.  

#### ![image](https://github.com/user-attachments/assets/125fa6f9-6b84-4d8b-9347-7cea723ed970) ![image](https://github.com/user-attachments/assets/d0623031-7abd-4b15-bab9-5716bfbbe3e0)


**Arquivo:** `src/components/CardInfo.jsx e src/components/ProfileCard`  
**Linha de referência:** *No CardInfo.jsx linha 47 - 53 e no ProfileCard linha 5 -25*  

---

### **3. Sistema de Rotas e Rotas Dinâmicas**  
O projeto utiliza `react-router-dom` para navegação, com a implementação de rotas dinâmicas que recebem parâmetros via URL.  

#### ![image](https://github.com/user-attachments/assets/912fc0ad-28b8-4ea3-8d3d-053e1173b78f)

**Arquivo:** `/routes/App.jsx`  

---

### **4. Armazenamento com LocalStorage**  
O `localStorage` foi utilizado na tela de login para armazenar e gerenciar informações do usuário, garantindo persistência entre sessões.  

#### ![image](https://github.com/user-attachments/assets/ee593bb1-f020-413e-ab0f-cd366a068459)

**Arquivo:** `src/pages/Login.jsx`  
**Linha de referência:** *12 -22*  

---

### **5. Fetch de Dados de uma API**  
O projeto consome dados de uma API externa, integrando-os com a interface para exibição dinâmica. UTILIZAMOS TANTO DA API/BACK-END QUE FIZEMOS quanto do mock-api com dados aleátorios. 

#### 📷 ![image](https://github.com/user-attachments/assets/67f17083-570c-4cc0-8bb1-e0f889241f7d)
 
**Arquivo:** `src/components/ProfileCard.js`  
**Linha de referência:** *19 - 70* 
