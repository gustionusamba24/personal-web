const About = () => {
  return (
    <section className="pt-20 lg:pt-32">
      <div className="container">
        <h1 className="heading-1">
          About <span className="heading-2">Me</span>
        </h1>

        <div className="mt-4 items-center md:mt-6 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center justify-center gap-5 lg:gap-7">
            <p className="about-description">
              Gustio Nusamba is a software engineer with 1 year of experience.
              His experience began when he joined at Ruang Guru as a frontend
              engineer student and at Hacktiv8 as a backend engineer student.
            </p>
            <p className="about-description">
              Proficient in both front end and back end, he brings a strong
              foundation in Java, JavaScript, Typescript, and PHP in every
              project. Currently, his goal is to develop his skills by taking
              part in developing projects together with people who are
              experienced in their fields.
            </p>
          </div>

          <div className="hidden lg:block">
            <figure className="ml-auto w-full max-w-[480px]">
              <img
                src="/images/about/gustio.jpg"
                alt="Gustio Nusamba"
                width={600}
                height={800}
                className="w-full rounded-[10px]"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
