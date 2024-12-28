import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Summary from "./Summary";

const EducationCard = ({ endDate, institution, area, summary }) => {
  return (
    <article className="flex flex-wrap gap-8 lg:justify-center">
      <motion.div
        className="w-full lg:w-1/6"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-center text-foreground-color lg:text-right">
          {new Date(endDate).getFullYear()}
        </p>
      </motion.div>
      <motion.div
        className="w-full max-w-xl lg:w-5/6"
        initial={{ x: +100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="mb-2 font-semibold">
          {area}
          {institution && (
            <>
              <br />
              <span className="text-purple-100">{institution}</span>
            </>
          )}
        </h3>
        <Summary className="text-foreground-color" content={summary} />
      </motion.div>
    </article>
  );
};

EducationCard.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  institution: PropTypes.string,
  area: PropTypes.string,
  score: PropTypes.string,
  url: PropTypes.string,
  summary: PropTypes.any,
};

export default EducationCard;
