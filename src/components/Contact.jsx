import PropTypes from "prop-types";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const icons = {
  github: { component: FaGithub, title: "Github" },
  linkedin: { component: FaLinkedinIn, title: "LinkedIn" },
  email: { component: MdOutlineEmail, title: "email" },
  phone: { component: FaPhone, title: "phone" },
};

const Contact = ({ type, url, label }) => {
  const icon = icons[type] ?? null;

  return (
    <>
      {icon && <icon.component alt={icon.title} />}
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

export default Contact;
