import clsx from "clsx";
import PropTypes from "prop-types";

const TitleSection = ({ className, children, ...props }) => {
  return (
    <h2 className={clsx("mb-8 text-center text-4xl", className)} {...props}>
      {children}
    </h2>
  );
};

TitleSection.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any,
};

export default TitleSection;
