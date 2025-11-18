import { AnimatePresence } from "framer-motion";
import ReactLenis from "lenis/react";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ResumePage from "./pages/ResumePage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </ReactLenis>
  );
};

export default App;
