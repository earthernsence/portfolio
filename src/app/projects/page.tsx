// "use client";

// import { useEffect } from "react";
import Image from "next/image";
import "../globals.css";

import logoAD from "../assets/projects/AD_loading.png";
import noImg from "../assets/projects/no_image.png";
import Link from "next/link";

import { IconDefinition, faGithub } from "@fortawesome/free-brands-svg-icons";
import Icon from "../common/Icon";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
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
];

const SingleProject = (props: { project: Project }) => {
  const proj = props.project;

  return (
    <>
      <div className="flex flex-col justify-start bg-gray-400 text-black m-1 border-4 border-gray-700 border-solid rounded-2xl w-[calc(50%-2rem)] p-2 min-w-[22rem]">
        {
          proj.image
            ? <Image className="object-contain h-80 mb-4 place-self-center" src={proj.image} alt={`Project image for ${proj.title}`} />
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
                  <button className="rounded-lg border-solid border-2 border-transparent pt-2 pb-2 pr-4 pl-4 font-medium text-base font-sans text-black bg-white cursor-pointer transition-[border-color] duration-300 hover:border-slate-600 focus:outline-4 focus:outline focus:outline-blue-950 mr-4">More Information</button>
                </Link>
              : <button className="rounded-lg border-solid border-2 border-transparent pt-2 pb-2 pr-4 pl-4 font-medium text-base font-sans text-black bg-white cursor-pointer transition-[border-color] duration-300 hover:border-slate-600 focus:outline-4 focus:outline focus:outline-blue-950 disabled:bg-gray-600 disabled:border-gray-500 mr-4" disabled>Info Unavailable</button>
          }
          {
            proj.infoPages
              ? proj.infoPages.map((page: Page) => <Icon icon={page.icon} link={page.link} key={page.name} /> )
              : null
          }
        </div>
        <br />
      </div>
    </>
  )
};

const ProjectPage = () => {
  // useEffect(() => {
  //   document.title = "Projects";
  // }, []);

  return (
    <>
      <div className="place-self-center w-full max-w-full pt-0 pb-12 pl-16 pr-16 text-left bg-gradient-to-r from-transparent via-slate-800 to-transparent">
      <div className={`c-projects-bg fixed top-0 left-0 bg-cover w-full h-full -z-10`} />
      <div className="text-4xl">Projects</div>
      <div className="text-xl text-left w-full">
        Here are some projects that I have worked on; some are larger than others.
        <br />
        Some have been completed, but others are projects I still contribute to.
      </div>
      <br />
      <div className="flex flex-row flex-wrap w-full justify-evenly">
        { Projects.map((project: Project) => <SingleProject project={project} key={project.id} />) }
      </div>
      </div>
    </>
  )
}

export default ProjectPage;