import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Register from "../pages/register";
import Login from "../pages/login";

const token = localStorage.getItem("token:KenzieHub");
const RoutesMain = () => (
  <>
    <Routes>
      <Route
        element={token ? <Navigate to="/dashboard" /> : <Login />}
        path="/"
      ></Route>
      <Route
        element={token ? <Navigate to="/dashboard" /> : <Register />}
        path="/register"
      ></Route>
      <Route
        element={!token ? <Navigate to="/login" /> : <Dashboard />}
        path="/dashboard"
      ></Route>
      <Route element={<Navigate to="/" />} path="*"></Route>
    </Routes>
  </>
);

export default RoutesMain;
