import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import DoctorMainPage from "./pages/DoctorPage/DoctorMainPage";
import DoctorMatchPage from "./pages/DoctorPage/DoctorMatchPage";
import FontPage from "./pages/FontPage";
function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/doctor" element={<DoctorMainPage />} />
        <Route path="/doctor-match" element={<DoctorMatchPage />} />

        <Route path="/onboarding-1" element={<FontPage />} />
      </Routes>
    </Router>
  );
}

export default App;
