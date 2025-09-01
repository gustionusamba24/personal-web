import { NavLink } from "react-router";

const Navbar = ({ navOpen }) => {
  const navItems = [
    {
      label: "Home",
      link: "/",
      className: "nav-link",
    },
    {
      label: "Projects",
      link: "/projects",
      className: "nav-link",
    },
    {
      label: "Resume",
      link: "/resume",
      className: "nav-link",
    },
    {
      label: "Blog",
      link: "https://medium.com/@gustio.n",
      className: "nav-link ",
    },
    {
      label: "Contact",
      link: "/contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <NavLink
          key={key}
          to={link}
          className={({ isActive }) =>
            `${className} ${isActive ? "active" : ""}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
