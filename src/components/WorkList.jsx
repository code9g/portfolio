import PropTypes from "prop-types";
import WorkCard from "./WorkCard";

const WorkList = ({ items }) => {
  return (
    <div className="flex flex-col gap-8">
      {items.map((item, index) => (
        <WorkCard key={index} {...item} />
      ))}
    </div>
  );
};

WorkList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default WorkList;
