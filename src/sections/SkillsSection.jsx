import Container from "../components/Container";
import Section from "../components/Section";
import SkillList from "../components/SkillList";
import TitleSection from "../components/TitleSection";
import resume from "../data/resume.json";

const SkillsSection = () => {
  return (
    <Section id="skills">
      <Container className="flex flex-col items-center">
        <TitleSection>Compétences</TitleSection>
        <SkillList items={resume.skills} />
      </Container>
    </Section>
  );
};

SkillsSection.propTypes = {};

export default SkillsSection;
