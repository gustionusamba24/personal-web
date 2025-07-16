const ContactCard = ({ imgSrc, label, account, link }) => {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-zinc-950 p-6 ring-1 ring-inset ring-zinc-50/10">
      <figure>
        <img src={imgSrc} alt={`Contact ${label}`} width={50} height={50} />
      </figure>

      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">{label}</p>

        <p className="text-[16px] font-semibold text-zinc-300">
          <a href={link} target="_blank" className="font-sans">
            {account}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
