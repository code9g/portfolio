import PropTypes from "prop-types";
import Description from "./Description";

const Education = ({ year, company = null, role, description }) => {
  return (
    <article className="flex flex-wrap gap-8 lg:justify-center">
      <div className="w-full lg:w-1/6">
        <p className="text-center text-sm text-neutral-400 lg:text-right">
          {year}
        </p>
      </div>
      <div className="w-full max-w-xl lg:w-5/6">
        <h3 className="mb-2 font-semibold">
          {role}
          {company && (
            <>
              {" "}
              - <span className="text-sm text-purple-100">{company}</span>
            </>
          )}
        </h3>
        <Description content={description} />
      </div>
    </article>
  );
};

Education.propTypes = {
  year: PropTypes.string.isRequired,
  company: PropTypes.string,
  role: PropTypes.string.isRequired,
  description: PropTypes.any,
};

export default Education;
