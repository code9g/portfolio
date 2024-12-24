import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaSass,
  FaVuejs,
} from "react-icons/fa";
import { GoRuby } from "react-icons/go";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiReactjsLine,
  RiSvelteFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiBabel,
  SiDelphi,
  SiExpress,
  SiGithub,
  SiJest,
  SiMongodb,
  SiReactrouter,
  SiRedux,
  SiRubocop,
  SiSqlite,
  SiThealgorithms,
  SiVite,
} from "react-icons/si";
import { TbBrandMysql, TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";

const technologies = {
  algorithm: { component: SiThealgorithms, title: "Algorithm", className: "" },
  figma: { component: FaFigma, title: "Figma", className: "" },
  tailwind: {
    component: RiTailwindCssFill,
    title: "Tailwind CSS",
    className: "text-blue-500",
  },
  delphi: { component: SiDelphi, title: "Delphi", className: "text-red-600" },
  sass: { component: FaSass, title: "Sass", className: "text-red-600" },
  bootstrap: {
    component: FaBootstrap,
    title: "Bootstrap",
    className: "text-blue-500",
  },
  firebase: {
    component: RiFirebaseFill,
    title: "Firebase",
    className: "",
  },
  angular: {
    component: FaAngular,
    title: "Angular",
    className: "text-blue-500",
  },
  php: { component: FaPhp, title: "PHP", className: "text-blue-700" },
  sqlite: { component: SiSqlite, title: "SQLite", className: "" },
  ruby: { component: GoRuby, title: "Ruby", className: "" },
  rails: { component: SiRubocop, title: "Rails", className: "text-red-500" },
  threejs: { component: TbBrandThreejs, title: "Three.js", className: "" },
  svelte: { component: RiSvelteFill, title: "Svelte", className: "" },
  python: {
    component: FaPython,
    title: "Python",
    className: "text-yellow-600",
  },
  mysql: {
    component: TbBrandMysql,
    title: "MySQL",
    className: "text-blue-800",
  },
  vue: { component: FaVuejs, title: "Vue.js", className: "" },
  "react-router": {
    component: SiReactrouter,
    title: "react-router",
    className: "text-neutral-400",
  },
  redux: {
    component: SiRedux,
    title: "Redux",
    className: "text-purple-700",
  },
  react: {
    component: RiReactjsLine,
    title: "React",
    className: "text-cyan-400",
  },
  css: { component: FaCss3Alt, title: "CSS", className: "text-blue-500" },
  express: { component: SiExpress, title: "Express", className: "" },
  vitejs: { component: SiVite, title: "Vite", className: "text-yellow-800" },
  javascript: {
    component: RiJavascriptFill,
    title: "JavaScript",
    className: "text-yellow-500",
  },
  nextjs: {
    component: TbBrandNextjs,
    title: "Next.js",
    className: "text-neutral-300",
  },
  html: { component: FaHtml5, title: "HTML", className: "text-red-400" },
  mongodb: {
    component: SiMongodb,
    title: "MongoDb",
    className: "text-green-500",
  },
  redis: { component: DiRedis, title: "Redis", className: "text-red-700" },
  nodejs: {
    component: FaNodeJs,
    title: "Node.js",
    className: "text-green-500",
  },
  postgres: {
    component: BiLogoPostgresql,
    title: "PostgreSQL",
    className: "text-sky-700",
  },
  github: {
    component: SiGithub,
    title: "Github",
    className: "text-neutral-100",
  },
  babel: {
    component: SiBabel,
    title: "Babel",
    className: "",
  },
  jest: {
    component: SiJest,
    title: "Jest",
    className: "text-red-500",
  },
  recharts: {
    title: "Recharts",
    className: "",
  },
  "rtk-query": {
    title: "RTK Query",
    className: "",
  },
};

const findTechnology = (name) => technologies[name] ?? null;

export default findTechnology;
