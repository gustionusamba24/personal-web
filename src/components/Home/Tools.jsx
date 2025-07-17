import ToolCard from "./ToolCard";

const tools = [
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/tools/javascript.svg`,
    label: "JavaScript",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/tools/typescript.svg`,
    label: "TypeScript",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/tools/php.svg`,
    label: "PHP",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/tools/java.svg`,
    label: "Java",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/tools/react.svg`,
    label: "React JS",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/tools/express.svg`,
    label: "Express JS",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/tools/laravel.svg`,
    label: "Laravel",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/tools/spring.svg`,
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

        <div className="mt-8 grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3 md:mt-10 lg:mt-14">
          {tools.map(({ imgSrc, label }, key) => (
            <ToolCard key={key} imgSrc={imgSrc} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
