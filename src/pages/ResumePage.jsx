import Resume from "../components/Resume/Resume";

const ResumePage = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="heading-1">
          The <span className="heading-2">Resume</span>
        </h1>

        <Resume />
      </div>
    </section>
  );
};

export default ResumePage;
