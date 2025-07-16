import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
