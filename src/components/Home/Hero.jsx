import Button from "../Button";

const Hero = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <p className="font-heading text-xl font-bold uppercase leading-tight tracking-tight text-zinc-50/50 lg:text-2xl">
            Full Stack Developer
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-normal text-zinc-50 md:text-[55px] lg:text-7xl lg:font-bold">
            Gustio Nusamba
          </h1>

          <div className="mt-5 flex gap-4 md:mt-8 lg:gap-6">
            <Button
              label={"Download CV"}
              href={
                "https://drive.google.com/file/d/1lAcT5J5alyrx7WL3uQiSGamj2ZnMS0bc/view?usp=sharing"
              }
              icon={"download"}
              target="_blank"
              className={"btn-fill"}
            />
            <Button
              label={"Scroll Down"}
              href={"#about"}
              icon={"arrow_downward"}
              className={"btn-outline"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
