import PropTypes from "prop-types";
import Description from "./Description";
import Tags from "./Tags";

const Project = ({ images, title, description, skills }) => {
  const firstPicture =
    images instanceof Array && images.length > 0 ? images[0] : null;

  return (
    <article className="flex flex-wrap gap-8 lg:justify-center">
      <div className="w-full lg:w-1/4">
        {firstPicture ? (
          <img
            className="aspect-square w-full rounded object-contain object-top"
            src={`portfolio/img/projects/${firstPicture}`}
            alt={title}
          />
        ) : (
          <>&nbsp;</>
        )}
      </div>
      <div className="w-full max-w-xl lg:w-3/4">
        <h3 className="mb-2 font-semibold">{title}</h3>
        <Description content={description} />
        <Tags items={skills} />{" "}
      </div>
    </article>
  );
};

Project.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string.isRequired,
  description: PropTypes.any,
  skills: PropTypes.array,
};

export default Project;
