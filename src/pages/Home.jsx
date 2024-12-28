import About from "../sections/About";
import EducationSection from "../sections/EducationSection";
import Experiences from "../sections/Experiences";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <EducationSection />
      <Experiences />
      <Projects />
    </>
  );
};

Home.propTypes = {};

export default Home;
