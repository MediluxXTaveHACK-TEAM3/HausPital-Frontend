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

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        {/* <Route path="/" element={<NamePage />} /> */}
        {/* <Route path="/" element={<JuminPage />} /> */}
        <Route path="/" element={<GenderPage />} />
        {/* <Route path="/" element={<AddressPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
