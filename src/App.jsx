import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import GuidesPage from "./components/Guide/GuidesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/guias" element={<GuidesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
