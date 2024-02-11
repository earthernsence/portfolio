import { IconDefinition, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/image"
import Image from "next/image";

import tc from "#/projects/small/tc.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icon from "../common/Icon";

type Page = {
  name: string;
  link: string;
  icon: IconDefinition
};

type Utility = {
  id: string,
  name: string,
  description: string,
  image: StaticImageData,
  links: Array<Page>,
};

const utilities: Array<Utility> = [
  {
    id: "tc",
    name: "Time Calculator",
    description: "I got really annoyed with having to go to Wolfram-Alpha to add together lengths of time, so I made this.",
    image: tc,
    links: [
      {
        name: "gh",
        link: "https://github.com/earthernsence/portfolio/tree/master/src/app/utilities/time-calculator",
        icon: faGithub,
      },
      {
        name: "play",
        link: "https://jroyvibes.vercel.app/utilities/time-calculator",
        icon: faGamepad
      }
    ]
  }
];

const SingleProject = (props: { utility: Utility }) => (
  <div className="border-4 border-gray-500 flex rounded-lg flex-row w-2/3 place-items-center p-4 mb-2 md:h-40">
    <div className="flex w-1/4">
      <Image
        className="flex border-gray-300 border-2 mr-4"
        src={props.utility.image}
        alt={`Project image for ${props.utility.name}`}
        height={128} width={128}
      />
    </div>
    <div className="flex flex-col relative w-1/2">
      <div className="text-2xl text-white">{ props.utility.name }</div>
      <div className="text-md text-gray-400">{ props.utility.description }</div>
    </div>
    <div className="flex xs:flex-col md:flex-row w-1/4 justify-center place-items-center">
      {
        props.utility.links.map((page: Page, index: number) =>
          <Icon icon={page.icon} link={page.link} key={index} className="text-white" />
        )
      }
    </div>
  </div>
);

export default function UtilitiesPage() {
  return (
    <>
    <div className="place-self-center w-full max-w-7xl pt-0 pb-12 pl-16 pr-16 xs:text-left md:text-justify">
      <div className="text-4xl xs:text-center md:text-left">Utilities</div>
      <br />
      There are a few things I've made to improve my personal quality-of-life. I get annoyed pretty easily
      and am tired of not being able to do things quickly. As with any other project like this, it usually takes
      about an hour to be able to save me thirty seconds.
      <br />
      <br />
      <div className="text-xl underline">List of utilities</div>
      <br />
      <div className="flex flex-col items-center">
        {
          utilities.map((utility: Utility, index: number) =>
            <SingleProject utility={utility} key={index} />
          )
        }
      </div>
    </div>
  </>
  )
}