import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HighlightList from "./HighlightList";
import Img from "./Img";
import Summary from "./Summary";

const ProjectCard = ({ images, title, description, url = null, skills }) => {
  const firstPicture =
    images instanceof Array && images.length > 0 ? images[0] : null;

  return (
    <article className="flex flex-col flex-wrap items-center lg:flex-row lg:items-start lg:justify-center">
      <motion.div
        className="w-full items-start justify-start p-4 lg:w-1/4"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {firstPicture ? (
          <Img
            className="aspect-video w-full rounded object-cover object-top"
            src={`/img/projects/${firstPicture}`}
            alt={title}
          />
        ) : (
          <>&nbsp;</>
        )}
      </motion.div>
      <motion.div
        className="w-full max-w-xl p-4 lg:w-3/4"
        initial={{ x: +100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="mb-2 font-semibold">
          {url ? (
            <Link className="hover:underline" to={url} target="_blank">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <Summary className="text-neutral-400 " content={description} />
        <HighlightList items={skills} />
      </motion.div>
    </article>
  );
};

ProjectCard.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string.isRequired,
  description: PropTypes.any,
  skills: PropTypes.array,
  url: PropTypes.string,
};

export default ProjectCard;
