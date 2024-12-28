import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import findIcons from "../lib/utils/findIcons";

const Contact = ({ type, url, label, className }) => {
  const icon = findIcons(type);

  return (
    <>
      {icon && (
        <icon.component
          alt={icon.title}
          className={clsx(icon.className, className)}
        />
      )}
      <Link className={clsx("hover:underline", className)} to={url}>
        {label}
      </Link>
    </>
  );
};

Contact.propTypes = {
  type: PropTypes.string,
  url: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.any,
};

export default Contact;
