import PropTypes from "prop-types";
import Description from "./Description";
import Tags from "./Tags";

const Project = ({ images, title, description, url = null, skills }) => {
  const firstPicture =
    images instanceof Array && images.length > 0 ? images[0] : null;

  return (
    <article className="flex flex-col flex-wrap items-center lg:flex-row lg:items-start lg:justify-center">
      <div className="w-full items-start justify-start pr-4 pt-4 lg:w-1/4">
        {firstPicture ? (
          <img
            className="aspect-video w-full rounded object-cover object-top"
            src={`${import.meta.env.BASE_URL}/img/projects/${firstPicture}`}
            alt={title}
          />
        ) : (
          <>&nbsp;</>
        )}
      </div>
      <div className="w-full max-w-xl pl-4 pt-4 lg:w-3/4">
        <h3 className="mb-2 font-semibold">
          {url ? (
            <a className="hover:underline" href={url} target="_blanck">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <Description content={description} />
        <Tags items={skills} />
      </div>
    </article>
  );
};

Project.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string.isRequired,
  description: PropTypes.any,
  skills: PropTypes.array,
  url: PropTypes.string,
};

export default Project;
