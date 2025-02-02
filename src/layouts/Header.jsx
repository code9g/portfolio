import clsx from "clsx";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const links = [
  { url: "#about", title: "Qui suis-je ?" },
  { url: "#skills", title: "Compétences" },
  { url: "#education", title: "Formations" },
  { url: "#work", title: "Expériences" },
  { url: "#projects", title: "Projets" },
  { url: "#contact", title: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 h-16 bg-neutral-950/80">
      <Container className="flex h-full items-center justify-between py-0 text-xl">
        <Link className="pl-4 lg:pl-0" to="/">
          &lt;code99&nbsp;/&gt;
        </Link>
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
                <Link
                  className="px-3 hover:underline"
                  to={link.url}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
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
