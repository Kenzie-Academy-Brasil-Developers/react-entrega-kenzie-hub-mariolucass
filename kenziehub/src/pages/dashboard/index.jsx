// import { useState } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons";
import { apiHeader } from "../../services/axios";

import {
  DashboardContainer,
  DashboardFooter,
  DashboardHeader,
  DashboardMain,
  DashboardWelcome,
} from "./styles";

const Dashboard = () => {
  const [nameUser, setNameUser] = useState("");
  const [categoryUser, setCategoryUser] = useState("");
  const [techs, setTechs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    apiHeader
      .get("/profile")
      .then((res) => {
        setNameUser(res.data.name);
        setCategoryUser(res.data.course_module);
        setTechs(res.data.techs);
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  const tecnologies = techs.forEach((e) => {
    return (
      <li>
        <h3>{e.title}</h3>
        <span>{e.status}</span>
        <button></button>
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
        <div>
          <h2>Tecnologias </h2>
          <Button texto={"+"} tipo={3}></Button>
        </div>

        <div>
          <ul className="tecnologiesList">{tecnologies}</ul>
        </div>
      </DashboardMain>

      <DashboardFooter></DashboardFooter>
    </DashboardContainer>
  );
};

export default Dashboard;
