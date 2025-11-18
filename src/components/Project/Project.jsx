import ProjectCard from "./ProjectCard";

const projects = [
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/projects/cover-mini-projects.jpg`,
    title: "Mini Projects",
    tools: ["HTML", "CSS", "JS", "TS", "React JS"],
    description:
      "An Experiment to learn JS, TS, HTML, CSS, and React by creating the simple projects",
    repoLink: "https://github.com/gustionusamba24/mini-projects",
    demoLink: "#projects",
  },
];

const Project = () => {
  return (
    <div id="projects" className="mt-24 grid gap-8 lg:mt-32">
      {projects.map(
        ({ imgSrc, title, tools, description, repoLink, demoLink }, key) => (
          <ProjectCard
            key={key}
            imgSrc={imgSrc}
            title={title}
            tools={tools}
            description={description}
            repoLink={repoLink}
            demoLink={demoLink}
          />
        )
      )}
    </div>
  );
};

export default Project;
