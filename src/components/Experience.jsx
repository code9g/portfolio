import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Description from "./Description";
import Tags from "./Tags";

const Experience = ({ year, name, position, summary, highlights }) => {
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
          {position}
          <br />
          <span className="text-purple-100">{name}</span>
        </h3>
        <Description className="text-neutral-400 " content={summary} />
        <Tags items={highlights} />
      </motion.div>
    </article>
  );
};

Experience.propTypes = {
  year: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  summary: PropTypes.any,
  highlights: PropTypes.array,
};

export default Experience;
