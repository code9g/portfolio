import { motion } from "framer-motion";
import PropTypes from "prop-types";
import HighlightList from "./HighlightList";
import Summary from "./Summary";

const WorkCard = ({
  startDate,
  endDate,
  name,
  position,
  summary,
  highlights,
}) => {
  const sd = new Date(startDate);
  const ed = new Date(endDate);
  let date = null;

  const years = ed.getFullYear() - sd.getFullYear();
  const months = ed.getMonth() - sd.getMonth();

  if (years >= 2) {
    date = sd.getFullYear() + " - " + ed.getFullYear();
  } else if (years > 1) {
    console.log("not yet implemented");
  } else if (years === 0) {
    if (months === 0)
      date = sd.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  }

  return (
    <article className="flex flex-col flex-wrap items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
      <motion.div
        className="w-full lg:w-1/6"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-center text-neutral-400 lg:text-right">{date}</p>
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
        <Summary className="text-neutral-400 " content={summary} />
        <HighlightList items={highlights} />
      </motion.div>
    </article>
  );
};

WorkCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.any,
  highlights: PropTypes.array,
};

export default WorkCard;
