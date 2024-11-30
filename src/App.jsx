import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import DownloadSuccessPage from "./components/Guide/DownloadSuccessPage";
import GuideDetails from "./components/Guide/GuideDetails";
import GuidesPage from "./components/Guide/GuidesPage";
import Layout from "./components/Layout/Layout";
import NoticeDetails from "./components/Notice/NoticeDetails";
import NoticePage from "./components/Notice/NoticePage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category/:categoryId" element={<Dashboard />} />
          <Route path="/guias" element={<GuidesPage />} />
          <Route path="/guide/:guideId" element={<GuideDetails />} />
          <Route path="/download-success" element={<DownloadSuccessPage />} />

          <Route path="/noticias" element={<NoticePage />} />
          <Route path="/notice/:noticeId" element={<NoticeDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
