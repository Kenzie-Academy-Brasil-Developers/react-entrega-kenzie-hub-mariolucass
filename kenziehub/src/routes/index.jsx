import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Register from "../pages/register";
import Login from "../pages/login";

const token = localStorage.getItem("token:KenzieHub");
const RoutesMain = () => (
  <>
    <Routes>
      <Route
        path="/"
        element={token ? <Navigate to="/dashboard" /> : <Login />}
      ></Route>

      <Route
        path="/register"
        element={token ? <Navigate to="/dashboard" /> : <Register />}
      ></Route>

      <Route
        path="/dashboard"
        element={!token ? <Navigate to="/login" /> : <Dashboard />}
      ></Route>

      <Route element={<Navigate to="/" />} path="*"></Route>
    </Routes>
  </>
);

export default RoutesMain;
