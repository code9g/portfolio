import { motion } from "framer-motion";
import about from "../assets/about.jpg";
import Img from "../components/Img";
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
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex w-full items-center justify-center lg:w-1/2 lg:p-8"
        >
          <Img className="rounded-2xl" src={about} alt="about" />
        </motion.div>
        <motion.div
          initial={{ x: +100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="size-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-justify">{resume.about}</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

About.propTypes = {};

export default About;
