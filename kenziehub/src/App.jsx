import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/global";

import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <RoutesMain />
        <GlobalStyle />
        <ToastContainer limit={3} autoClose={2000} />
      </Router>
    </>
  );
}

export default App;
