import { Metadata } from "next";
import URL from "@/app/common/URL";

import { faGamepad, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icon from "@/app/common/Icon";

import cv from "#/projects/small/cv.png";
import etch from "#/projects/small/etch.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects: Other"
};

type Page = {
  name: string;
  link: string;
  icon: IconDefinition
};

type SmallProject = {
  id: string,
  name: string,
  languages: string,
  description: string,
  image: typeof etch,
  infoPages: Array<Page>
};

const projects: Array<SmallProject> = [
  {
    id: "eas",
    name: "Etch-A-Sketch",
    languages: "HTML/CSS/JS w/ Svelte framework",
    description: "A basic project to demonstrate ability in parsing user inputs & the Svelte language.",
    image: etch,
    infoPages: [
      {
        name: "gh",
        link: "https://github.com/earthernsence/etch-a-sketch-svelte",
        icon: faGithub
      },
      {
        name: "play",
        link: "https://earthernsence.github.io/etch-a-sketch-svelte/",
        icon: faGamepad
      }
    ]
  },
  {
    id: "cv",
    name: "CV Creator",
    languages: "HTML/CSS/JS w/ React framework",
    description: "A basic project to demonstrate ability in state & props in the React framework.",
    image: cv,
    infoPages: [
      {
        name: "gh",
        link: "https://github.com/earthernsence/cv-application",
        icon: faGithub
      },
      {
        name: "play",
        link: "https://cv-creator-lemon.vercel.app/",
        icon: faGamepad
      }
    ]
  }
];

const SingleProject = (props: { project: SmallProject }) => (
  <div className="border-4 border-gray-500 flex rounded-lg flex-row w-2/3 place-items-center p-4 mb-2 md:h-40">
    <div className="flex w-1/4">
      <Image
        className="flex border-gray-300 border-2 mr-4"
        src={props.project.image}
        alt={`Project image for ${props.project.name}`}
        height={128} width={128}
      />
    </div>
    <div className="flex flex-col relative w-1/2">
      <div className="text-2xl text-white">{ props.project.name }</div>
      <div className="text-md text-gray-400">{ props.project.description }</div>
      <div className="text-xs text-gray-500">{ props.project.languages }</div>
    </div>
    <div className="flex xs:flex-col md:flex-row w-1/4 justify-center place-items-center">
      {
        props.project.infoPages.map((page: Page, index: number) =>
          <Icon icon={page.icon} link={page.link} key={index} className="text-white" />
        )
      }
    </div>
  </div>
);

const OtherProjectsPage = () => (
  <>
    <div className="place-self-center w-full max-w-7xl pt-0 pb-12 pl-16 pr-16 xs:text-left md:text-justify">
      <div className="text-4xl xs:text-center md:text-left">Other Projects</div>
      <br />
      I have worked on some projects that don&apos;t necessarily fit in other places. These tend to be
      small, and mostly for the sake of gaining experience in languages that I may not be 100% confident in.
      Many of these come from <URL href="https://www.theodinproject.com/">the Odin Project</URL>, which was used
      in one of my classes to teach full-stack web development.
      <br />
      <br />
      <div className="text-xl underline">List of projects</div>
      <br />
      <div className="flex flex-col items-center">
        {
          projects.map((project: SmallProject, index: number) =>
            <SingleProject project={project} key={index} />
          )
        }
      </div>
    </div>
  </>
);

export default OtherProjectsPage;
