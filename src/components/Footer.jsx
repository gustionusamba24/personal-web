const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Resume",
    href: "#resume",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/codewithsadee-org",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/codewithsadee",
  },
  {
    label: "Twitter X",
    href: "https://x.com/codewithsadee_",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithsadee",
  },
  {
    label: "CodePen",
    href: "https://codepen.io/codewithsadee",
  },
];

const Footer = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s connect
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <p className="mb-2">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => {
                  return (
                    <li key={key}>
                      <a
                        href={href}
                        className="block py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                      >
                        {label}
                      </a>
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
          <a href="#home" className="text-lightGreen">
            Gustio Nusamba
          </a>

          <p className="text-sm text-zinc-500">
            &copy; 2025 <span className="text-zinc-200">Gustio Nusamba</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
