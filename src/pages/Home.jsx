import AboutSection from "../sections/AboutSection";
import EducationSection from "../sections/EducationSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";
import WorkSection from "../sections/WorkSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <WorkSection />
      <ProjectsSection />
    </>
  );
};

Home.propTypes = {};

export default Home;
