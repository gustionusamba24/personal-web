const Button = ({
  href,
  target = "_self",
  label,
  icon,
  className,
  rel,
}) => {
  return (
    <a href={href} target={target} rel={rel} className={`btn ${className}`}>
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
