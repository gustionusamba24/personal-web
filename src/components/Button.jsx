const Button = ({ href, target = "_self", label, icon, className }) => {
  return (
    <a href={href} target={target} className={`btn ${className}`}>
      {label}

      {icon ? (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      ) : undefined}
    </a>
  );
};

export default Button;
