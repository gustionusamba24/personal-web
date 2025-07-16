import Button from "../Button";

const ProjectCard = ({
  imgSrc,
  title,
  tools,
  description,
  repoLink,
  demoLink,
}) => {
  return (
    <div className="rounded-lg lg:flex lg:gap-5">
      <figure className="overflow-hidden rounded-t-lg border-[1.5px] border-dashed border-zinc-50/10 lg:max-w-64 lg:rounded-b-lg">
        <img
          src={imgSrc}
          alt={`${title}'s cover`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="rounded-b-lg border-x-[1.5px] border-b-[1.5px] border-dashed border-zinc-50/10 bg-zinc-950 lg:grow lg:rounded-t-lg lg:border-t-[1.5px]">
        <div className="flex flex-col justify-center px-6 pb-4 pt-8">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-6 text-sm font-medium leading-5 tracking-tight text-zinc-50/70 md:tracking-normal">
            {description}
          </p>
          <p className="mt-5 text-xs text-zinc-50/70">
            Tools:{" "}
            {tools.map((label, index) => (
              <span key={index}>
                {label}
                {index < tools.length - 1 && ", "}
              </span>
            ))}
          </p>
          <div className="mr-auto mt-8 flex items-center gap-2">
            <Button
              label={"Repository"}
              href={repoLink}
              icon={"folder_code"}
              target="_blank"
              className={"btn-repository"}
            />

            <Button
              label={"Live Site"}
              href={demoLink}
              icon={"play_arrow"}
              target="_blank"
              className={"btn-live-site"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
