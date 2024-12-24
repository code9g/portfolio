import clsx from "clsx";
import PropTypes from "prop-types";

const Container = ({ className, children, ...props }) => {
  return (
    <div className={clsx("container mx-auto py-8", className)} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any,
};

export default Container;
