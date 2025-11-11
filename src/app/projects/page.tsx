import "../globals.css";
import Image from "next/image";
import Link from "next/link";

import gy from "#/projects/golden_years_logo.png";
import logoAD from "#/projects/AD_loading.png";
import noImg from "#/projects/no_image.png";

import { faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import Icon from "../common/Icon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

type Page = {
  name: string;
  link: string;
  icon: IconDefinition
}

type Project = {
  id: string;
  image: typeof logoAD;
  title: string;
  category: string;
  date: string;
  fields: string;
  description: string;
  route?: string;
  infoPages?: Array<Page>
}

const Projects: Array<Project> = [
  {
    id: "ad",
    image: logoAD,
    title: "Antimatter Dimensions",
    category: "Game Development",
    date: "June 2018 to August 2023",
    fields: "HTML, CSS, Javascript, Vue.js",
    description: `An incredibly dense incremental game with many layers of content & 
      an emphasis on automation w/ several paradigm shifts that alter the gameplay loop.`,
    route: "/projects/antimatterdimensions/",
    infoPages: [
      {
        name: "gh",
        link: "https://github.com/IvarK/AntimatterDimensionsSourceCode",
        icon: faGithub
      },
      {
        name: "play",
        link: "https://ivark.github.io/AntimatterDimensions",
        icon: faGamepad
      }
    ]
  },
  {
    id: "bot",
    image: noImg,
    title: "Antimatter Dimensions Discord Bot",
    category: "Bot Development",
    date: "April 2021 to present",
    fields: "Typescript, Node, SQLite",
    description: `A superfluous (albeit useful!) Discord bot made for the Antimatter Dimensions Discord server. 
      Made to serve up answers to your burning questions in record time.`,
    infoPages: [
      {
        name: "gh",
        link: "https://github.com/earthernsence/ADAnswers-Bot",
        icon: faGithub
      }
    ]
  },
  {
    id: "brainlet",
    image: noImg,
    title: "Brainlet",
    category: "Experience",
    date: "February 2024 to present",
    fields: "React + Next.js, with Convex/Edgestore",
    description: `In my computer science class, we were asked to recreate a popular application
    as a final project. Me and a team of two other developers co-created Brainlet, a full-stack
    note-taking application based on Notion.`,
    infoPages: [
      {
        name: "gh",
        link: "https://github.com/earthernsence/brainlet",
        icon: faGithub
      },
      {
        name: "play",
        link: "https://brainlet-rho.vercel.app",
        icon: faGamepad
      }
    ]
  },
  {
    id: "gy",
    image: gy,
    title: "Golden Years",
    category: "Extracuriccular",
    date: "April 2024 to present",
    fields: "Full-Stack Web Development w/ Next.js",
    description: `Golden Years is a club started by a close friend of mine aimed at creating volunteer opportunities
    for students in memory care centres around the St. Louis area. As a member of the club, I was asked to create a
    website that could be used for several purposes in the club.`,
    infoPages: [
      {
        name: "gh",
        link: "https://github.com/earthernsence/golden-years",
        icon: faGithub,
      },
      {
        name: "play",
        link: "https://golden-years.vercel.app",
        icon: faGamepad
      },
    ]
  },
  {
    id: "capstone",
    image: noImg,
    title: "Various Projects",
    category: "Experience",
    date: "August 2023 to present",
    fields: "HTML, CSS, JS, Svelte, React+Next.js",
    description: `One of my classes allows me to work on various projects to gain experience in web development
      or, more broadly, development, following (vaguely) along with the Odin Project.`,
    route: "/projects/other/"
  },
  {
    id: "qol",
    image: noImg,
    title: "Utilities",
    category: "Experience",
    date: "February 2024 to present",
    fields: "React",
    description: `There are a few things I've made to improve my personal quality-of-life. 
    I get annoyed pretty easily and am tired of not being able to do things quickly.`,
    route: "/utilities/"
  },
];

const SingleProject = (props: { project: Project }) => {
  const proj = props.project;

  return (
    <>
      <div className="flex flex-col justify-start m-1 p-2 w-[calc(50%-2rem)] min-w-[22rem]
                    bg-gray-400 text-black border-4 border-gray-700 border-solid rounded-2xl">
        {
          proj.image
            ? <Image className="object-contain h-80 mb-4 place-self-center"
              src={proj.image}
              alt={`Project image for ${proj.title}`} />
            : null
        }
        <b>{ proj.title }</b>
        <i>{ proj.category }</i>
        <i>{ proj.date }</i>
        <i>{ proj.fields }</i>
        <br />
        { proj.description }
        <br />
        <br />
        <div className="flex flex-row justify-start w-full place-items-center">
          {
            proj.route
              ? <Link href={proj.route}>
                <button className="rounded-lg border-solid border-2 border-transparent
                                  pt-2 pb-2 pr-4 pl-4 mr-4
                                  font-medium text-base font-sans text-black bg-white cursor-pointer
                                  transition-[border-color] duration-300
                                  hover:border-slate-600
                                  focus:outline-4 focus:outline focus:outline-blue-950">More Information</button>
              </Link>
              : <button className="rounded-lg border-solid border-2 border-transparent
                                  pt-2 pb-2 pr-4 pl-4 mr-4
                                  font-medium text-base font-sans text-black bg-white cursor-pointer
                                  transition-[border-color] duration-300
                                  hover:border-slate-600
                                  focus:outline-4 focus:outline focus:outline-blue-950
                                  disabled:bg-gray-600 disabled:border-gray-500 disabled:cursor-not-allowed" disabled>
                                    Info Unavailable
              </button>
          }
          {
            proj.infoPages
              ? proj.infoPages.map((page: Page, index: number) =>
                <Icon icon={page.icon} link={page.link} key={index} />
              )
              : null
          }
        </div>
        <br />
      </div>
    </>
  );
};

const ProjectPage = () => (
  <>
    <div className="place-self-center w-full max-w-7xl pt-0 pb-12 pl-16 pr-16 text-left">
      <div className={`c-projects-bg fixed top-0 left-0 bg-cover w-full h-full -z-10`} />
      <div className="text-4xl xs:text-center md:text-left">Projects</div>
      <div className="xs:text-lg md:text-xl xs:text-center md:text-left w-full">
        Here are some projects that I have worked on; some are larger than others.
        <br />
        Some have been completed, but others are projects I still contribute to.
      </div>
      <br />
      <div className="flex flex-row flex-wrap w-full justify-evenly">
        { Projects.map((project: Project, index: number) => <SingleProject project={project} key={index} />) }
      </div>
    </div>
  </>
);

export default ProjectPage;