import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import Container from "../components/Container";
import Description from "../components/Description";
import Img from "../components/Img";
import Section from "../components/Section";
import resume from "../data/resume.json";

const Hero = () => {
  return (
    <Section id="hero" className="">
      <Container className="flex flex-wrap">
        <motion.div
          className="flex w-full flex-col items-center justify-center lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="mb-4 text-center text-6xl font-thin tracking-tight lg:my-8 lg:text-8xl">
            {resume.fullName}
          </h2>
          <h3 className="mb-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent lg:mb-8">
            {resume.role}
          </h3>
          <Description
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
            alt={resume.fullName}
            className="h-min w-full rounded-xl object-contain"
          />
        </motion.div>
      </Container>
    </Section>
  );
};

Hero.propTypes = {};

export default Hero;
