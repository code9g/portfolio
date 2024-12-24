import PropTypes from "prop-types";
import Description from "./Description";
import Tags from "./Tags";

const Experience = ({ year, company, role, description, skills }) => {
  return (
    <article className="flex flex-col flex-wrap items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
      <div className="w-full lg:w-1/6">
        <p className="text-center text-neutral-400 lg:text-right">{year}</p>
      </div>
      <div className="w-full max-w-xl lg:w-5/6">
        <h3 className="mb-2 font-semibold">
          {role} - <span className="text-purple-100">{company}</span>
        </h3>
        <Description content={description} />
        <Tags items={skills} />
      </div>
    </article>
  );
};

Experience.propTypes = {
  year: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.any,
  skills: PropTypes.array,
};

export default Experience;
