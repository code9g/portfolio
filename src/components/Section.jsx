import clsx from "clsx";
import PropTypes from "prop-types";

const Section = ({ className, children, ...props }) => {
  return (
    <section
      className={clsx(
        "border-b border-neutral-700 px-4 py-8 lg:px-0",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any,
};

export default Section;
