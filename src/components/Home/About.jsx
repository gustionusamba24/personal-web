const About = () => {
  return (
    <section id="about" className="pt-20 lg:pt-32">
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
            <div className="mt-7 flex w-full items-center justify-center gap-7">
              <a
                href="https://github.com/gustionusamba24"
                className="social-icon"
                target="_blank"
              >
                <img
                  src="images/about/github.svg"
                  alt="Github Profile"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/gustio-nusamba/"
                className="social-icon"
                target="_blank"
              >
                <img
                  src="images/about/linkedin.svg"
                  alt="Linkedin Profile"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://leetcode.com/u/gustionusamba24/"
                className="social-icon"
                target="_blank"
              >
                <img
                  src="images/about/leetcode.svg"
                  alt="Leetcode Profile"
                  width={32}
                  height={32}
                />
              </a>
            </div>
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
