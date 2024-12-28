import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ items }) => {
  return (
    <div className="flex flex-col gap-8 px-4 lg:px-0">
      {items.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ProjectList;
