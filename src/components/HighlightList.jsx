import PropTypes from "prop-types";
import Highlight from "./Highlight";

const HighlightList = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3">
      {items.map((item, index) => (
        <Highlight key={index} name={item} />
      ))}
    </div>
  );
};

HighlightList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default HighlightList;
