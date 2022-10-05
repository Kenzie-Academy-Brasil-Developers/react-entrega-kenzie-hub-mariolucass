import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import GlobalStyle from "./styles/global";
import Dashboard from "./pages/dashboard";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/"></Route>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<Dashboard />} path="/dashboard"></Route>
        <Route element={<Navigate to="/" />} path="*"></Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </Router>
  );
}

export default App;
