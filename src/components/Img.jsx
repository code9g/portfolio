import PropTypes from "prop-types";

const Img = ({ src, ...props }) => {
  if (src.startsWith("/")) {
    src = "." + src;
  }
  return <img src={src} {...props} />;
};

Img.propTypes = {
  src: PropTypes.string,
};

export default Img;
