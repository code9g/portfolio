import Container from "../components/Container";
import ProjectList from "../components/ProjectList";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import resume from "../data/resume.json";

const ProjectsSection = () => {
  return (
    <Section id="projects">
      <Container>
        <TitleSection>Projets</TitleSection>
        <ProjectList items={resume.projects} />
      </Container>
    </Section>
  );
};

ProjectsSection.propTypes = {};

export default ProjectsSection;
