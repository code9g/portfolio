import Container from "../components/Container";
import Experience from "../components/Experience";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import resume from "../data/resume.json";

const Experiences = () => {
  return (
    <Section id="experiences">
      <Container>
        <TitleSection>Experiences</TitleSection>
        <div className="flex flex-col gap-8">
          {resume.experiences.map((item, index) => (
            <Experience key={index} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

Experiences.propTypes = {};

export default Experiences;
