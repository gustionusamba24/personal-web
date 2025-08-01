import Contact from "../components/Contact/Contact";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 50 },
};

const ContactPage = () => {
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
            Let's <span className="heading-2">Connect!</span>
          </h1>

          <Contact />
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
