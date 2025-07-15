import ToolCard from "./ToolCard";

const tools = [
  {
    imgSrc: "/images/tools/javascript.svg",
    label: "JavaScript",
  },
  {
    imgSrc: "/images/tools/typescript.svg",
    label: "TypeScript",
  },
  {
    imgSrc: "/images/tools/php.svg",
    label: "PHP",
  },
  {
    imgSrc: "/images/tools/java.svg",
    label: "Java",
  },
  {
    imgSrc: "/images/tools/react.svg",
    label: "React JS",
  },
  {
    imgSrc: "/images/tools/express.svg",
    label: "Express JS",
  },
  {
    imgSrc: "/images/tools/laravel.svg",
    label: "Laravel",
  },
  {
    imgSrc: "/images/tools/spring.svg",
    label: "Spring Boot",
  },
];

const Tools = () => {
  return (
    <section className="pt-20 lg:pt-32">
      <div className="container">
        <h1 className="heading-1">
          Essential Tools <span className="heading-2">I Use</span>
        </h1>

        <div className="mt-4 grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3 lg:mt-8">
          {tools.map(({ imgSrc, label }, key) => (
            <ToolCard key={key} imgSrc={imgSrc} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
