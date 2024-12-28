import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import findIcons from "../lib/utils/findIcons";

const Contact = ({ type, url, label }) => {
  const icon = findIcons(type);

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
