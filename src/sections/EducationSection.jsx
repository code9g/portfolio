import Container from "../components/Container";
import EducationList from "../components/EducationList";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import resume from "../data/resume.json";

const EducationSection = () => {
  return (
    <Section id="education">
      <Container>
        <TitleSection>Formations</TitleSection>
        <EducationList items={resume.education} />
      </Container>
    </Section>
  );
};

EducationSection.propTypes = {};

export default EducationSection;
