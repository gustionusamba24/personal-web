import Contact from "../components/Contact/Contact";

const ContactPage = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="heading-1">
          Let's <span className="heading-2">Connect!</span>
        </h1>

        <Contact />
      </div>
    </section>
  );
};

export default ContactPage;
