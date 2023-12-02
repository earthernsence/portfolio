import Link from "next/link";
import picture from "../assets/about/picture.jpg";
import rainier from "../assets/about/washington.png";
import Image from "next/image";
import URL from "../common/URL";

export const AboutPage = () => {
  return (
    <>
      <div className="place-self-center max-w-7xl pt-0 pb-12 pl-16 pr-16 text-left ">
        <div className="text-4xl">About me</div>
        <div className="relative flex flex-row justify-between items-center w-full">
          <div className="w-1/3 p-4">
            <Image src={picture} className="w-full" alt="Picture of yours truly" />
          </div>
          <div className="w-2/3">
            Hello! My name is Jace Royer, and I am currently a high school student in the St. Louis area.
            Computer science, and along with it, web development, has long been a passion of mine and something 
            intend to go into in the future. A lot of it is rooted in my exposure to web-based game development 
            where I worked with a team of developers to create <Link className="text-cyan-700 visited:text-violet-700 underline" href="/projects/antimatterdimensions">Antimatter Dimensions</Link>,
            an incremental game. I found a lot of great people and I learned a good lot while working on that game and became
            an active member in that community.
          </div>
        </div>

        I started leaning into the realm of web development (and more generally, development) in around 2018 when I was around 11 and found
        it to be something I really enjoyed doing. I initially attempted to create my own incremental game after discovering Antimatter Dimensions
        but instead focused most of my attention on the Reality Update for AD. Throughout my time working on AD
        I learned the big 3 for web development as well as the Vue framework.

        <br />
        <br />

        My work on AD led me to the community where I began the ADAnswersBot project in 2021, which is a Discord bot that I run.
        The bot has been used several hundred thousand times by members of the Discord server across the world.
        Initially written in Javascript with the <URL href="https://discord.js.org/">discord.js</URL> framework,
        I rewrote the bot in Typescript. I consider the bot to be one of my greatest accomplishments and am ecstatic that
        it has been able to impact such a wide variety of people.

        <br />
        <br />


        I have taken various coding/CS related classes during my time in high school, which I attribute my growing desire to
        work in the field to. I am particularly fond of data science and analytics and would love to major in it.
        One of my biggest dreams is to work data analytics for a Major League Baseball team.

        <div className="relative flex flex-row justify-between items-center w-full">
          <div className="w-2/3">
            As for myself, sports have always been a big passion of mine.
            I grew up a St. Louis sports fan and eventually found my way to Seattle-area sports thanks to <URL href="https://www.youtube.com/watch?v=TIgK56cAjfY">an excellent documentary</URL>.
            I am a big baseball and hockey fan, and follow the Seattle Mariners and Kraken who are my favourite teams.
            I enjoy travelling and love Washington and Maine.
          </div>
          <div className="w-1/3 p-4">
            <Image src={rainier} className="w-full" alt="Picture from Rainier National Park" />
          </div>
        </div> 
      </div>
    </>
  )
};

export default AboutPage;