import { useState } from "react";
import Button from "../../components/Buttons";
import { DashboardContainer } from "./styles";

const Dashboard = () => {
  const [nameUser, setNameUser] = useState("");
  const [categoryUser, setCategoryUser] = useState("");

  return (
    <DashboardContainer>
      <header>
        <h1>Kenzie Hub</h1>
        <Button texto={"Sair"} />
      </header>
      <div>
        <h2>Olá, {nameUser}</h2>
        <span>{categoryUser}</span>
      </div>
      <div>
        <h3>Que pena! Estamos em desenvolvimento :(</h3>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
