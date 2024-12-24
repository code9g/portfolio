import Experience from "../components/Experience";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import resume from "../constants/resume.json";

const Experiences = () => {
  return (
    <Section id="experiences">
      <TitleSection>Experiences</TitleSection>
      <div className="flex flex-col gap-8">
        {resume.experiences.map((item, index) => (
          <Experience key={index} {...item} />
        ))}
      </div>
    </Section>
  );
};

Experiences.propTypes = {};

export default Experiences;
