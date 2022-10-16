import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons";
import Modal from "../../components/Modal";
import Lixeira from "../../assets/Vector.png";
import { TechContext } from "../../contexts/TechContext";
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
  const { DeleteTechs, CreateTechs, EditTechs, setModal, modal } =
    useContext(TechContext);

  const tecnologies = techs.map((element) => {
    console.log(element);
    return (
      <li key={element.id}>
        <h3>{element.title}</h3>
        <span>{element.status}</span>
        <button onClick={() => DeleteTechs(element.id)}>
          <img src={Lixeira} alt="lixeira" />
        </button>
      </li>
    );
  });

  return (
    <DashboardContainer>
      {!modal ? (
        <div>
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
              <button
                onClick={() => {
                  setModal(true);
                }}
              >
                +
              </button>
            </div>

            <div className="divListaTechs">
              {techs.length ? (
                <ul className="tecnologiesList">{tecnologies}</ul>
              ) : (
                <div>
                  <h3>Não há tecnologias, experimente adicionar uma nova!</h3>
                </div>
              )}
            </div>
          </DashboardMain>
        </div>
      ) : (
        <Modal />
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
