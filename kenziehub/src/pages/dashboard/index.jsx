import { useContext, useEffect } from "react";
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
import { apiHeader } from "../../services/axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const { nameUser, categoryUser, techs, setTechs } = useContext(UserContext);
  const { DeleteTechs, EditTechs, setModal, modal, isFiltered, listNew } =
    useContext(TechContext);

  useEffect(() => {
    if (isFiltered) {
      const updateList = async () => {
        const response = await apiHeader.get("/profile");
        setTechs(response.data.techs);
      };
      updateList();
    }
  }, [listNew]);

  const tecnologies = isFiltered
    ? listNew.map((element) => {
        return (
          <li key={element.id}>
            <h3>{element.title}</h3>
            <span>{element.status}</span>
            <button onClick={() => DeleteTechs(element.id)}>
              <img src={Lixeira} alt="lixeira" />
            </button>
          </li>
        );
      })
    : techs.map((element) => {
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
              <h3>
                Voce não tem tecnologias registradas 😕, experimente adicionar
                uma nova!!
              </h3>
            </div>
          )}
        </div>
      </DashboardMain>

      {modal && <Modal />}
    </DashboardContainer>
  );
};

export default Dashboard;
