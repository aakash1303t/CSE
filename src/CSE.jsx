import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Faculties from "./pages/Faculties";
import Facilities from "./pages/Facilities";
import Students from "./pages/Students";
import CCCLabPage from './pages/CCCLabPage';
import PythonLabPage from './pages/PythonLabPage';
import DBMSLabPage from './pages/DBMSLabPage';
import Footer from "./components/Footer";

function CSE() {
  return (
    <Router>
      <Navbar />
      <div>
        {/* Add padding to avoid overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/students" element={<Students />} />
          <Route path="/ccc-lab" element={<CCCLabPage />} />
          <Route path="/python-lab" element={<PythonLabPage />} />
          <Route path="/dbms-lab" element={<DBMSLabPage />} />
          </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default CSE;
