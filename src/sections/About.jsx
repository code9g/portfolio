import about from "../assets/about.jpg";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import resume from "../data/resume.json";

const About = () => {
  return (
    <Section id="about">
      <TitleSection>
        Qui <span className="text-neutral-500">suis-je</span> ?
      </TitleSection>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={about} alt="about" />
          </div>
        </div>
        <div className="size-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-justify">{resume.about}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

About.propTypes = {};

export default About;
