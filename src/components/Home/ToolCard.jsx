const ToolCard = ({ imgSrc, label }) => {
  return (
    <div className="group flex items-center gap-4 rounded-xl bg-zinc-50/10 p-2 ring-1 ring-inset ring-zinc-50/10">
      <figure className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-zinc-50/10 transition-colors group-hover:bg-zinc-900">
        <img src={imgSrc} alt={label} width={32} height={32} />
      </figure>

      <div>
        <h3 className="text-base font-medium">{label}</h3>
      </div>
    </div>
  );
};

export default ToolCard;
