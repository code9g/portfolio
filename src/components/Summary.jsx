import clsx from "clsx";
import PropTypes from "prop-types";
import stringable from "../lib/utils/stringable";

const Summary = ({ content, className, ...props }) => {
  if (stringable(content)) {
    content = [content];
  }

  return content.map((text, index) => (
    <p key={index} className={clsx("mb-4 text-justify", className)} {...props}>
      {text}
    </p>
  ));
};

Summary.propTypes = {
  content: PropTypes.any,
  className: PropTypes.any,
};

export default Summary;
