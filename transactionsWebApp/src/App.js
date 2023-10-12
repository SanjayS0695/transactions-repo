import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import TransactionContainer from "./pages/transactions/TransactionContainer";
import InstallmentsContainer from "./pages/installments/InstallmentsContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/transactions" />} />
        <Route
          exact
          path="/transactions"
          element={<TransactionContainer />}
        ></Route>
        <Route
          path="/transactions/:id"
          element={<InstallmentsContainer />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
