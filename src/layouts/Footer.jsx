import Contact from "../components/Contact";
import Container from "../components/Container";
import resume from "../data/resume.json";

const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral-950">
      <Container className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-3">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl">Contact</h2>
          <p className="font-normal tracking-[2px]">
            N&apos;hesitez pas à me contacter&nbsp;!
          </p>
        </div>
        <ul className="flex list-none flex-col items-start gap-1">
          <li className="flex items-center gap-3">
            <Contact
              type="email"
              url={"mailto:" + resume.basics.email}
              label={resume.basics.email}
            />
          </li>
          {resume.basics.profiles.map((profile, index) => (
            <li key={index} className="flex items-center gap-3">
              <Contact
                type={profile.network.toLowerCase()}
                url={profile.url}
                label={profile.url
                  .replace(/^https?:\/\/(w{3}\.)?/, "")
                  .replace(/\/$/, "")}
              />
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
