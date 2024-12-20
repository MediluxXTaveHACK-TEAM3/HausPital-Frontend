import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import DoctorStartPage from "./pages/DoctorPage/DoctorStartPage";
import DoctorMainPage from "./pages/DoctorPage/DoctorMainPage";
import DoctorMatchPage from "./pages/DoctorPage/DoctorMatchPage";
import FontPage from "./pages/FontPage";
import NamePage from "./pages/NamePage";
import JuminPage from "./pages/JuminPage";
import GenderPage from "./pages/GenderPage";
import AddressPage from "./pages/AddressPage";
import UnivHosPage from "./pages/UnivHosPage";
import TownHosPage from "./pages/TownHosPage";
import IllnessPage from "./pages/IllnessPage";
import PredictPage from "./pages/PredictPage";
import ConfirmPage from "./pages/ConfirmPage";

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/doc/home" element={<DoctorStartPage />} />
        <Route path="/doctor" element={<DoctorMainPage />} />
        <Route path="/doctor-match" element={<DoctorMatchPage />} />
        <Route path="/onboarding-1" element={<FontPage />} />
        <Route path="/name" element={<NamePage />} />
        <Route path="/jumin" element={<JuminPage />} />
        <Route path="/gender" element={<GenderPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/univhos" element={<UnivHosPage />} />
        <Route path="/townhos" element={<TownHosPage />} />
        <Route path="/illness" element={<IllnessPage />} />
        <Route path="/predict" element={<PredictPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
      </Routes>
    </Router>
  );
}

export default App;
