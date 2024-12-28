import AboutSection from "../sections/AboutSection";
import EducationSection from "../sections/EducationSection";
import HeroSection from "../sections/HeroSection";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import WorkSection from "../sections/WorkSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <EducationSection />
      <WorkSection />
      <Projects />
    </>
  );
};

Home.propTypes = {};

export default Home;
