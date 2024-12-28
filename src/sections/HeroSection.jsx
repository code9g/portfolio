import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import Container from "../components/Container";
import Img from "../components/Img";
import Section from "../components/Section";
import Summary from "../components/Summary";
import resume from "../data/resume.json";

const HeroSection = () => {
  return (
    <Section id="hero">
      <Container className="flex flex-wrap">
        <motion.div
          className="flex w-full flex-col items-center justify-center lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="mb-4 text-center text-4xl font-thin tracking-tight lg:my-8 lg:text-6xl">
            {resume.basics.name}
          </h2>
          <h3 className="mb-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent lg:mb-8">
            {resume.basics.label}
          </h3>
          <Summary
            className="font-light tracking-tighter"
            content={resume.hero}
          />
        </motion.div>
        <motion.div
          className="flex w-full items-center justify-center lg:w-1/2 lg:p-8"
          initial={{ x: +100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Img
            src={profile}
            alt="hero"
            className="h-min w-full rounded-xl object-contain"
          />
        </motion.div>
      </Container>
    </Section>
  );
};

HeroSection.propTypes = {};

export default HeroSection;
