import Education from "../components/Education";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import resume from "../data/resume.json";

const Educations = () => {
  return (
    <Section id="education">
      <TitleSection>Formations</TitleSection>
      <div className="flex flex-col gap-8 px-4 lg:px-0">
        {resume.education?.map((item, index) => (
          <Education key={index} {...item} />
        ))}
      </div>
    </Section>
  );
};

Educations.propTypes = {};

export default Educations;
