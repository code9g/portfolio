import About from "../sections/About";
import Educations from "../sections/Educations";
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
      <Educations />
      <Experiences />
      <Projects />
    </>
  );
};

Home.propTypes = {};

export default Home;
