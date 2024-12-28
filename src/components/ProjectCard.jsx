import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightList from "./HighlightList";
import Img from "./Img";
import Summary from "./Summary";

const ProjectCard = ({
  images,
  name,
  summary,
  url = null,
  highlights,
  repository = null,
}) => {
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
            alt={name}
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
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold">
            {url ? (
              <Link className="hover:underline" to={url} target="_blank">
                {name}
              </Link>
            ) : (
              name
            )}
          </h3>
          <div className="flex gap-4">
            {url && (
              <Link to={url} target="_blank">
                <FaLink />
              </Link>
            )}
            {repository && (
              <Link to={repository.url} target="_blank">
                <FaGithub />
              </Link>
            )}
          </div>
        </div>
        <Summary className="text-neutral-400 " content={summary} />
        <HighlightList items={highlights} />
      </motion.div>
    </article>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.array,
  summary: PropTypes.any,
  highlights: PropTypes.array,
  url: PropTypes.string,
  repository: PropTypes.any,
};

export default ProjectCard;
