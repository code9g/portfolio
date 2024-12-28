import PropTypes from "prop-types";
import EducationCard from "./EducationCard";

const EducationList = ({ items }) => {
  return (
    <div className="flex flex-col gap-8 px-4 lg:px-0">
      {items.map((item, index) => (
        <EducationCard key={index} {...item} />
      ))}
    </div>
  );
};

EducationList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default EducationList;
