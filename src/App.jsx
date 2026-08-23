import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudyLens from "./pages/StudyLens/StudyLens.jsx";
import Custom from "./pages/Custom/Custom.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studylens" element={<StudyLens />} />
        <Route path="/modocustomizavel" element={<Custom />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
