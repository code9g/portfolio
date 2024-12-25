import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Description from "./Description";
import Tags from "./Tags";

const Experience = ({ year, company, role, description, skills }) => {
  return (
    <article className="flex flex-col flex-wrap items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
      <motion.div
        className="w-full lg:w-1/6"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-center text-neutral-400 lg:text-right">{year}</p>
      </motion.div>
      <motion.div
        className="w-full max-w-xl lg:w-5/6"
        initial={{ x: +100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="mb-2 font-semibold">
          {role}
          <br />
          <span className="text-purple-100">{company}</span>
        </h3>
        <Description content={description} />
        <Tags items={skills} />
      </motion.div>
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
