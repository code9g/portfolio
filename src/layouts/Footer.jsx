import PropTypes from "prop-types";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import resume from "../data/resume.json";

const icons = {
  github: { component: FaGithub, title: "Github" },
  linkedin: { component: FaLinkedinIn, title: "LinkedIn" },
  email: { component: MdOutlineEmail, title: "email" },
  phone: { component: FaPhone, title: "phone" },
};

const Contact = ({ type, url, label }) => {
  const icon = icons[type];
  return (
    <>
      {<icon.component alt={icon.title} />}
      <Link className="hover:underline" to={url}>
        {label}
      </Link>
    </>
  );
};

Contact.propTypes = {
  type: PropTypes.string,
  url: PropTypes.string,
  label: PropTypes.string,
};

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
          {resume.contacts.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <Contact key={index} {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
