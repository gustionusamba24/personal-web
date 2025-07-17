import ResumeCard from "./ResumeCard";

const experiences = [
  {
    date: "Feb 2022 - Jul 2022",
    title: "Frontend Engineer Student",
    company: "Ruang Guru",
    descriptions: [
      "Learning about web Platform development and practicing the best practice from Ruang Guru Instructors. (React, Express Js, Jest).",
      "Gaining hands-on experience in front end development, utilizing the tools like Github, Postman, and Figma to streamline development process and enhance project workflows.",
    ],
    location: "Remote",
  },
  {
    date: "Aug 2022 - Dec 2022",
    title: "Backend Engineer Student",
    company: "Hacktiv8",
    descriptions: [
      "Gaining hands-on experience in back end development, utilizing the tools like Github, Postman, and Swagger/OpenAPI to streamline development process and enhance project workflows.",
      "Designing and developing APIs using Golang which leveraged by using clean architecture pattern, Gin Web Framework, Swagger, Docker, and GORM in order to complete final project.",
    ],
    location: "Remote",
  },
];

const educations = [
  {
    date: "2019 - 2023",
    title: "Bachelor Informatics",
    company: "Universitas Amikom Yogyakarta",
    descriptions: [
      "Learning the basic programming and continuing the advanced programming such as Algorithms, Data Structures, Object-Oriented Programming, Data Mining, and the basic Artificial Intelligence.",
      "Graduated from university with a GPA of 3.93.",
    ],
    location: "Yogyakarta",
  },
];

const Resume = () => {
  return (
    <div className="mt-24 max-w-2xl justify-self-center lg:mt-32">
      <h1 className="headline-2">Experience</h1>
      <div className="container-resume mb-36">
        {experiences.map(
          ({ date, title, company, descriptions, location }, key) => (
            <>
              <ResumeCard
                key={key}
                date={date}
                title={title}
                company={company}
                descriptions={descriptions}
                location={location}
              />
            </>
          ),
        )}
      </div>

      <h1 className="headline-2 mt-24">Education</h1>
      <div className="container-resume">
        {educations.map(
          ({ date, title, company, descriptions, location }, key) => (
            <ResumeCard
              key={key}
              date={date}
              title={title}
              company={company}
              descriptions={descriptions}
              location={location}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Resume;
