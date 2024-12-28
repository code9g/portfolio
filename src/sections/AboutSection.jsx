import { motion } from "framer-motion";
import about from "../assets/about.jpg";
import Container from "../components/Container";
import Description from "../components/Description";
import Img from "../components/Img";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import resume from "../data/resume.json";

const AboutSection = () => {
  return (
    <Section id="about">
      <Container>
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
            className="flex size-full flex-col items-center justify-center p-4 lg:w-1/2"
          >
            <Description content={resume.about} />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

AboutSection.propTypes = {};

export default AboutSection;
