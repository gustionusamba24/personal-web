import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Tools from "../components/Home/Tools";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 50 },
};

const HomePage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <About />
      <Tools />
    </motion.div>
  );
};

export default HomePage;
