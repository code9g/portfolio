import PropTypes from "prop-types";
import Skill from "./Skill";

const SkillList = ({ items }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 lg:max-w-[50vw]">
      {items.map((item) => {
        return <Skill key={item} name={item} />;
      })}
    </div>
  );
};

SkillList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SkillList;
