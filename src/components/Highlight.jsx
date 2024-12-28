import PropTypes from "prop-types";
import findIcons from "../lib/utils/findIcons";

const Highlight = ({ name }) => {
  return (
    <span className="mr-2 text-nowrap rounded bg-primary-color px-3 py-1.5 text-sm font-medium text-secondary-color">
      {findIcons(name)?.title ?? name}
    </span>
  );
};

Highlight.propTypes = {
  name: PropTypes.string,
};

export default Highlight;
