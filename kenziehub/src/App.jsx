import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import GlobalStyle from "./styles/global";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/"></Route>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<Navigate to="/" />} path="*"></Route>
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
