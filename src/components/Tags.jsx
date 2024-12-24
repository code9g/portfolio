import PropTypes from "prop-types";
import findTechnology from "../lib/utils/findTechnology";

const Tags = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3">
      {items.map((item, index) => (
        <span
          key={index}
          className="mr-2 text-nowrap rounded bg-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-950"
        >
          {findTechnology(item)?.title ?? item}
        </span>
      ))}
    </div>
  );
};

Tags.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Tags;
