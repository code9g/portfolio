import Container from "../components/Container";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import WorkList from "../components/WorkList";
import resume from "../data/resume.json";

const WorkSection = () => {
  return (
    <Section id="work">
      <Container>
        <TitleSection>Experiences</TitleSection>
        <WorkList items={resume.work} />
      </Container>
    </Section>
  );
};

WorkSection.propTypes = {};

export default WorkSection;
