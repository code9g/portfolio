import Project from "../components/Project";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import resume from "../data/resume.json";

const Projects = () => {
  return (
    <Section id="projects">
      <TitleSection>Projets</TitleSection>
      <div className="flex flex-col gap-8 px-4 lg:px-0">
        {resume.projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

Projects.propTypes = {};

export default Projects;
