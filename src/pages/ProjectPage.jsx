import { motion } from "framer-motion";
import Project from "../components/Project/Project";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 50 },
};

const ProjectPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.4 }}
    >
      <section className="section">
        <div className="container">
          <h1 className="heading-1">
            Featured <span className="heading-2">Projects</span>
          </h1>

          <Project />
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectPage;
