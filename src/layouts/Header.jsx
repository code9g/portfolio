import clsx from "clsx";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Container from "../components/Container";

const links = [
  { url: "#about", title: "Qui suis-je ?" },
  { url: "#skills", title: "Compétences" },
  { url: "#education", title: "Formations" },
  { url: "#experiences", title: "Expériences" },
  { url: "#projects", title: "Projets" },
  { url: "#contact", title: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-neutral-950">
      <Container className="flex items-center justify-between text-xl">
        <a className="pl-4 lg:pl-0" href="#home">
          &lt;code99&nbsp;/&gt;
        </a>
        <nav className="relative flex items-center justify-between">
          <button
            className="pr-4 lg:hidden lg:pr-0"
            type="button"
            onClick={() => setIsOpen((curr) => !curr)}
          >
            <CiMenuBurger />
          </button>
          <ul
            className={clsx(
              "absolute right-0 top-[125%] rounded-md bg-neutral-950 p-5 lg:relative lg:flex lg:rounded-none lg:bg-transparent lg:p-0",
              !isOpen && "hidden"
            )}
          >
            {links.map((link, index) => (
              <li key={index}>
                <a
                  className="px-3 hover:underline"
                  href={link.url}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

Header.propTypes = {};

export default Header;
