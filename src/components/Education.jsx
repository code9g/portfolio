import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Description from "./Description";

const Education = ({ year, company = null, role, description }) => {
  return (
    <article className="flex flex-wrap gap-8 lg:justify-center">
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
          {company && (
            <>
              <br />
              <span className="text-purple-100">{company}</span>
            </>
          )}
        </h3>
        <Description className="text-neutral-400" content={description} />
      </motion.div>
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
