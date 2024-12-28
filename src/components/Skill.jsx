import clsx from "clsx";
import PropTypes from "prop-types";
import findIcons from "../lib/utils/findIcons";

const Skill = ({ name }) => {
  const icon = findIcons(name);
  const content = icon ? (
    <icon.component
      className={clsx("size-full", icon.className)}
      alt={icon.title}
    />
  ) : (
    name
  );

  return (
    <div className="group relative flex size-28 items-center justify-center rounded-2xl border-2 border-neutral-500 p-4">
      {content}
      <div className="absolute bottom-0 z-10 hidden translate-y-[125%] rounded-md border border-neutral-400 bg-neutral-950/50 px-4 py-1 group-hover:block">
        {icon.title}
      </div>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string,
};

export default Skill;
