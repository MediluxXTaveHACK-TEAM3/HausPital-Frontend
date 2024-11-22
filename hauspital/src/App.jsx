import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import NamePage from "./pages/NamePage";
import JuminPage from "./pages/JuminPage";
import GenderPage from "./pages/GenderPage";
import AddressPage from "./pages/AddressPage";
import UnivHosPage from "./pages/UnivHosPage";
import TownHosPage from "./pages/TownHosPage";
import IllnessPage from "./pages/IllnessPage";

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/name" element={<NamePage />} />
        <Route path="/jumin" element={<JuminPage />} />
        <Route path="/gender" element={<GenderPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/univhos" element={<UnivHosPage />} />
        <Route path="/townhos" element={<TownHosPage />} />
        <Route path="/illness" element={<IllnessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
