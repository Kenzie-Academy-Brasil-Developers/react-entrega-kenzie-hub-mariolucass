import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Register from "../pages/register";
import Login from "../pages/login";
import { useEffect } from "react";

const token = localStorage.getItem("token:KenzieHub");
const RoutesMain = () => {
  const navigate = useNavigate();

  useEffect(() => {
    token ? navigate("/dashboard") : navigate("/");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
};

export default RoutesMain;
