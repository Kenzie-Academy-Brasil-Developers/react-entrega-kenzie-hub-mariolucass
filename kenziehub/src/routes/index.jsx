import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Register from "../pages/register";
import Login from "../pages/login";
import { UserProvider } from "../contexts/UserContext";

const RoutesMain = () => {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </UserProvider>
    </>
  );
};

export default RoutesMain;
