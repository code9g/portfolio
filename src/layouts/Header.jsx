import Container from "../components/Container";

const links = [
  { url: "#about", title: "Qui suis-je ?" },
  { url: "#skills", title: "Compétences" },
  { url: "#experiences", title: "Expériences" },
  { url: "#projects", title: "Projets" },
  { url: "#contact", title: "Contact" },
];

const Header = () => {
  return (
    <header className="bg-neutral-950">
      <Container className="flex items-center justify-between text-xl">
        <a href="#home">&lt;code99&nbsp;/&gt;</a>
        <nav className="flex items-center justify-between">
          <ul className="flex">
            {links.map((link, index) => (
              <li key={index}>
                <a className="px-3 hover:underline" href={link.url}>
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
