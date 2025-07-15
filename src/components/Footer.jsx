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
    label: "Leetcode",
    href: "https://leetcode.com/u/gustionusamba24/",
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

            <a href="" className="btn">
              Contact
            </a>
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
            Gustio Nusamba
          </Link>

          <p className="text-sm text-zinc-500">
            &copy; 2025 <span className="text-zinc-200">Gustio Nusamba</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
