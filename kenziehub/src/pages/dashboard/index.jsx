// import { useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons";
import { apiHeader } from "../../services/axios";
import {
  DashboardContainer,
  DashboardHeader,
  DashboardMain,
  DashboardWelcome,
} from "./styles";

const Dashboard = () => {
  const [nameUser, setNameUser] = useState("");
  const [categoryUser, setCategoryUser] = useState("");

  useEffect(() => {
    apiHeader
      .get("/profile")
      .then((res) => {
        setNameUser(res.data.name);
        setCategoryUser(res.data.course_module);
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  return (
    <DashboardContainer>
      <DashboardHeader>
        <h1>Kenzie Hub</h1>

        <Link to="/login">
          {" "}
          <Button
            texto={"Sair"}
            onClick={() => {
              window.localStorage.clear();
            }}
            tipo={3}
          />
        </Link>
      </DashboardHeader>

      <DashboardWelcome>
        <h2>Olá, {nameUser}</h2>
        <span>Voce esta no: {categoryUser}</span>
      </DashboardWelcome>

      <DashboardMain>
        <h3>Que pena! Estamos em desenvolvimento 😕</h3>

        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </DashboardMain>
    </DashboardContainer>
  );
};

export default Dashboard;
