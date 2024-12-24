import PropTypes from "prop-types";
import findTechnology from "../lib/utils/findTechnology";

const Tags = ({ items }) => {
  return items.map((item, index) => (
    <span
      key={index}
      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
    >
      {findTechnology(item)?.title ?? item}
    </span>
  ));
};

Tags.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Tags;
