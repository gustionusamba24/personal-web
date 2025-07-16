import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import ReactLenis from "lenis/react";

const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </ReactLenis>
  );
};

export default App;
