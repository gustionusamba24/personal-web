const ResumeCard = ({ date, title, company, descriptions, location }) => {
  return (
    <div className="lg:flex lg:gap-14">
      <div className="flex flex-col items-center justify-center gap-1 lg:w-[35%] lg:items-start lg:justify-self-end">
        <h3 className="mb-1 text-lg font-bold text-lightGreen">{date}</h3>
        <p className="text-[16px] font-semibold">{title}</p>
        <p className="text-sm font-medium text-zinc-50/70">{company}</p>
        <p className="text-sm text-zinc-50/70">{location}</p>
      </div>

      <ul className="mx-auto mt-10 flex max-w-96 flex-col justify-center gap-3 lg:mx-0 lg:mt-0">
        {descriptions.map((label, key) => (
          <li className="link-desc" key={key}>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeCard;
