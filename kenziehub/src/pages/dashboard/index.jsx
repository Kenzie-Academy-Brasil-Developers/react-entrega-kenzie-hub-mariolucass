import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons";
import { UserContext } from "../../contexts/UserContext";

import {
  DashboardContainer,
  DashboardHeader,
  DashboardMain,
  DashboardWelcome,
} from "./styles";

const Dashboard = () => {
  const navigate = useNavigate();
  const { nameUser, categoryUser, techs } = useContext(UserContext);

  return (
    <DashboardContainer>
      <DashboardHeader>
        <h1>Kenzie Hub</h1>

        <Button
          texto={"Sair"}
          onClick={() => {
            window.localStorage.clear();
            navigate("/");
          }}
          tipo={3}
        />
      </DashboardHeader>

      <DashboardWelcome>
        <h2>Olá, {nameUser}</h2>
        <span>Você está no: {categoryUser}</span>
      </DashboardWelcome>

      <DashboardMain>
        <div className="divTechs">
          <h2>Tecnologias </h2>
          <Button texto={"+"} tipo={3}></Button>
        </div>

        <div className="divListaTechs">
          <ul className="tecnologiesList">
            {techs.length ? (
              techs
            ) : (
              <div>
                <h3>Não há tecnologias, experimente adicionar uma nova!</h3>
              </div>
            )}
          </ul>
        </div>
      </DashboardMain>
    </DashboardContainer>
  );
};

export default Dashboard;
