import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import GuideDetails from "./components/Guide/GuideDetails";
import GuidesPage from "./components/Guide/GuidesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/guias" element={<GuidesPage />} />
        <Route path="/guide/:guideId" element={<GuideDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
