import { Link } from "react-router";

const pages = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Resume",
    link: "/resume",
  },
  {
    label: "Blog",
    link: "https://medium.com/@gustio.n",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/gustionusamba24",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gustio-nusamba/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/gustionusamba/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gustiosmb",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/GustioNusamba",
  },
];

const Footer = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together
            </h2>

            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <p className="mb-2">Pages</p>

              <ul>
                {pages.map(({ label, link }, key) => {
                  return (
                    <li key={key}>
                      <Link
                        to={link}
                        className="block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="">
              <p className="mb-2">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => {
                  return (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between pt-10">
          <Link to="/" className="text-lightGreen">
            <img
              src={import.meta.env.BASE_URL + "/images/logo.svg"}
              alt="Logo"
              width={36}
              height={36}
            />
          </Link>

          <p className="font-heading text-sm font-medium text-zinc-500">
            &copy; 2025 <span className="text-zinc-200">Gustio Nusamba</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
