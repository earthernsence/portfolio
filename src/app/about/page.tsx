import Image from "next/image";
import Link from "next/link";

import picture from "#/about/picture.jpg";
import rainier from "#/about/washington.png";

import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../common/Icon";
import { Metadata } from "next";
import URL from "../common/URL";

export const metadata: Metadata = {
  title: "About me",
};

const AboutPage = () => (
  <>
    <div className="place-self-center max-w-7xl pt-0 pb-12 pl-16 pr-16 xs:text-left md:text-justify">
      <div className="text-4xl xs:text-center md:text-left">About me</div>
      <div className="relative flex xs:flex-col md:flex-row justify-between items-center w-full">
        <div className="xs:w-full md:w-1/3 p-4">
          <Image src={picture} className="w-full border-gray-700 border-2" alt="Picture of yours truly" />
          <div className="text-xs text-gray-500 opacity-80 pt-2">
            Me. I did cut the hair recently.
          </div>
        </div>
        <div className="xs:w-full md:w-2/3">
          Hello! My name is Jace Royer, and I am a current college student in Missouri, majoring
          in data science with an emphasis in computer science. I am also anticipate exploring the
          fields of education, meteorology, and sports analytics over the course of my degree.
          Computer science, and along with it, web development, has long been a passion of mine and something
          intend to go into in the future. A lot of it is rooted in my exposure to web-based game development
          where I worked with a team of developers to create <Link
            className="text-cyan-700 visited:text-violet-700 underline"
            href="/projects/antimatterdimensions"
          >Antimatter Dimensions</Link>,
          an incremental game. I found a lot of great people and I learned a good lot while working on
          that game and became an active member in that community.
        </div>
      </div>
      <br />
        I started leaning into the realm of web development (and more generally, development) in around 2018
        when I was around 11 and found it to be something I really enjoyed doing. I initially attempted to
        create my own incremental game after discovering Antimatter Dimensions but instead focused most of my
        attention on the Reality Update for AD. Throughout my time working on AD I learned the big 3 for web
        development as well as the Vue framework.
      <br />
      <br />
      My work on AD led me to the community where I began the ADAnswersBot project in 2021, which is a Discord bot
      that I run. The bot has been used several hundred thousand times by members of the
      Discord server across the world. Initially written in Javascript with the <URL href="https://discord.js.org/">
        discord.js</URL> framework, I rewrote the bot in Typescript.
      I consider the bot to be one of my greatest accomplishments and am ecstatic that it has been able to impact
      such a wide variety of people. I continue to work on the ADAnswersBot project as I find the time, working on
      making it much more community-accessible to hopefully make it far easier for new contributors to work on.
      <br />
      <br />
      I have taken various coding/CS related classes during my time in high school,
      which I attribute my growing desire to work in the field to, including working on
      a full year-long capstone project with a team of engineers. We created a system to automatically
      monitor plant health in gardens and flowerbeds, which was an excellent experience in terms of
      the engineering process and presentation.
      These days, I have continued to take relevant coursework in college, learning different skills
      in other languages along the way.
      I am interested in research pertaining to the use of data science methods and predictive models for
      meteorology, but I have also taken an interest in education, as I would love to be able to share my
      love for mathematics & computer science with the next generation.
      <br />
      <br />
      <div className="relative flex xs:flex-col md:flex-row justify-between items-center w-full">
        <div className="xs:w-full md:w-2/3">
          As for myself, sports have always been a big passion of mine.
          I grew up a St. Louis sports fan and eventually found my way to Seattle-area sports thanks to <URL
            href="https://www.youtube.com/watch?v=TIgK56cAjfY"> an excellent documentary</URL>.
          I am a big baseball and hockey fan, and follow the Seattle Mariners and Kraken who are my favourite teams.
          I enjoy travelling and love Washington and Maine. Much of my free time is spent either playing nostalgic
          video games or watching mid-week college football. I am currently a mathematics tutor for a private company,
          which has been nothing short of an incredibly joyful experience.
        </div>
        <div className="xs:w-full md:w-1/3 p-4">
          <Image src={rainier} className="w-full border-gray-700 border-2" alt="Picture from Rainier National Park" />
          <div className="text-xs text-gray-500 opacity-80 pt-2">
            Picture from Rainier National Park. Would love to go back
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="text-xl underline">Freelancing</div>
      <br />
      As a young developer, one of the best things I can do is continue to develop. My passion for this and
      helping out the people around me runs deep, and I would love to have the opportunity to help others
      with their outreach. I am fairly flexible but I also am still managing a high school student&apos;s schedule,
      so my time is occasionally limited. I am able to create projects with a variety of tools like React+Next.js or
      Svelte, whichever suits your needs better. The great thing about working with an actual developer instead of
      a service like Wix or Squarespace is that I&apos;m able to adjust to your specific needs and create a full
      and powerful website to fulfill your needs. And it won&apos;t be nearly as bland looking as this website.
      All you have to do is provide a place to host it. Availability and pricing are discussed on a per-project basis.
      <br />
      <br />
      You can contact me on one of the following:
      <br />
      <div className="flex flex-col text-white">
        <div className="flex flex-row items-center">
          {/* Here at jroyvibes industries, we hate email scrapers */}
          <FontAwesomeIcon icon={faSquareEnvelope} width={32} height={32} className="mr-4 h-8 w-8" />
          jt<span className="hidden">null</span>man20<span className="hidden">null</span>
          25@gma<span className="hidden">null</span>il.com
        </div>
        <div className="flex flex-row items-center">
          <FontAwesomeIcon icon={faDiscord} width={32} height={32} className="mr-4 h-8 w-8" />
          @earth1337_
        </div>
        <div className="flex flex-row items-center">
          <FontAwesomeIcon icon={faGithub} width={32} height={32} className="mr-4 h-8 w-8" />
          earthernsence
        </div>
      </div>
      <div className="flex flex-row w-full place-items-center justify-center">
        <Icon className="text-white mr-0" icon={faGithub} link="https://github.com/earthernsence" />
      </div>
    </div>
  </>
);

export default AboutPage;