import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-40 flex h-20 w-full items-center bg-gradient-to-b from-zinc-950 to-zinc-950/0">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 md:grid md:grid-cols-[1fr,3fr,1fr] md:px-6">
        <h1>
          <a
            href="/"
            className="text-lightGreen text-3xl font-extrabold tracking-wide md:text-lg lg:text-xl"
          >
            Gustio Nusamba
          </a>{" "}
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((currState) => !currState)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <a href="#contact" className="btn max-md:hidden md:justify-self-end">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
