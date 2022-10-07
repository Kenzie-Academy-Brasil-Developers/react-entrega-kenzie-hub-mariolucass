// import { useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons";
import { apiHeader } from "../../services/axios";
import {
  DashboardContainer,
  DashboardFooter,
  DashboardHeader,
  DashboardMain,
  DashboardWelcome,
} from "./styles";
import BurguerKenzie from "../../assets/BurguerKenzie.PNG";
import NuKenzie from "../../assets/NuKenzie.PNG";

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
              window.location.assign("/login");
            }}
            tipo={3}
          />
        </Link>
      </DashboardHeader>

      <DashboardWelcome>
        <h2>Olá, {nameUser}</h2>
        <span>Você está no: {categoryUser}</span>
      </DashboardWelcome>

      <DashboardMain>
        <h3>Que pena! Estamos em desenvolvimento 😕</h3>

        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </DashboardMain>

      <DashboardFooter>
        <div>
          {" "}
          <span>Enquanto isso conheça nossos outros sites:</span>
        </div>
        <div className="imgFooter">
          <img src={NuKenzie} alt="NuKenzie" />
        </div>
        <a
          href="https://nukenzie-wheat.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="nuKenzie"
        >
          NuKenzie
        </a>
        <div className="imgFooter">
          <img src={BurguerKenzie} alt="BurguerKenzie" />
        </div>
        <a
          href="https://burguerkenzie-xi.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="burguerKenzie"
        >
          BurguerKenzie
        </a>
      </DashboardFooter>
    </DashboardContainer>
  );
};

export default Dashboard;
