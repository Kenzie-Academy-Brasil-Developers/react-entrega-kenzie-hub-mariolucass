import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Register from "../pages/register";
import Login from "../pages/login";

const RoutesMain = () => (
  <>
    <Routes>
      <Route element={<Login />} path="/"></Route>
      <Route element={<Register />} path="/register"></Route>
      <Route element={<Dashboard />} path="/dashboard"></Route>
      <Route element={<Navigate to="/" />} path="*"></Route>
    </Routes>
  </>
);

export default RoutesMain;
