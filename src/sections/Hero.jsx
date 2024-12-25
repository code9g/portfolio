import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import Section from "../components/Section";
import resume from "../data/resume.json";

const Hero = () => {
  return (
    <Section id="hero" className="flex flex-wrap">
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
            {resume.fullName}
          </h2>
          <h3 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
            {resume.role}
          </h3>
          <p className="my-2 max-w-xl py-6 text-justify font-light tracking-tighter">
            {resume.hero}
          </p>
        </div>
      </motion.div>
      <motion.div
        className="w-full lg:w-1/2 lg:p-8"
        initial={{ x: +100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center">
          <img src={profile} alt={resume.fullName} />
        </div>
      </motion.div>
    </Section>
  );
};

Hero.propTypes = {};

export default Hero;
