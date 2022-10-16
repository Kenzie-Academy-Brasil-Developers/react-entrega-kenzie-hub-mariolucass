import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Register from "../pages/register";
import Login from "../pages/login";
import { UserProvider } from "../contexts/UserContext";
import { TechProvider } from "../contexts/TechContext";

const RoutesMain = () => {
  return (
    <>
      <UserProvider>
        <TechProvider>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </TechProvider>
      </UserProvider>
    </>
  );
};

export default RoutesMain;
