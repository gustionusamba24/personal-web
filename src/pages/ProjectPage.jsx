import Project from "../components/Project/Project";

const ProjectPage = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="heading-1">
          Featured <span className="heading-2">Projects</span>
        </h1>

        <Project />
      </div>
    </section>
  );
};

export default ProjectPage;
