import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Icon from "@/app/common/Icon";
import { Metadata } from "next";
import URL from "@/app/common/URL";

import contributions from "../../assets/projects/ad/contribution_chart.png";
import eternityModal from "../../assets/projects/ad/modal_eternity.png";
import mainPage from "../../assets/projects/ad/antimatter_dimensions.png";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects: Antimatter Dimensions",
};

const AntimatterDimensionsPage = () => (
  <>
    <div className="place-self-center w-full max-w-7xl pt-0 pb-12 pl-16 pr-16 xs:text-left md:text-justify">
      <div className="text-4xl xs:text-center md:text-left">Antimatter Dimensions</div>
      <div className="text-xs text-gray-300 xs:text-center md:text-left">
        My buddy SpectralFlame wrote a full-length
        retrospective which you can find <URL href="https://cyip92.github.io/site/#/ADdevlog/">here</URL>!
      </div>
      <br />
      Antimatter Dimensions is an idle/incremental game made for web browsers by a Finnish developer, Hevipelle.
      The game revolves around the user&apos;s moment-by-moment actions that are often extremely simple - but these
      actions are distinct from what the player does on a larger timescale. AD uses a structure like this & takes a
      (fairly) simple idea (one thing generates another) and expands heavily on it with several variations that are
      supplemented by paradigm shifts resulting from large prestige resets.
      The game emphasises automation throughout; most things end up completely automated at the end
      of the game. The idea behind this is so that the actual content is emphasised, and the old content can be built
      upon through that new content.
      <br />
      <br />
      <div className="text-xl underline">The game</div>
      <br />
      In Antimatter Dimensions, the goal of the player is to generate large amounts of antimatter.
      To generate antimatter, the player purchases the namesake dimensions. Thanks the the polynomial
      growth perpetuated because of this (the 8th dimension produces the 7th and so on until the
      1st dimension which produces antimatter),
      the player able to reach extremely large values of antimatter, reaching values into 10 to the power
      of trillions or quadrillions.
      <br />
      <br />
      The big idea behind AD is that it&apos;s continually unfolding. Content leads into other content,
      raising the complexity of the game and changing how the game itself is played. Upgrades are unlocked,
      automation is unlocked, and these work together to create a pretty satisfying experience.
      Old features are often revisited or changed in some way in an effort to keep old content still
      relevant, even as the newer features take hold. As prestige layers are a pretty big part of how AD
      works, the player may find themselves <i>back</i> at old content; though it is buffed or otherwise changed by some
      feature of the new content unlocked via the prestige.
      <br />
      <br />
      <div className="text-xl underline">My experiences</div>
      <br />
      I discovered AD on Kongregate (remember that?) in September 2017 and quickly joined the community thereafter.
      The AD I played back then is vastly different than what it is now, and by my estimate, it included around 10% of
      the current content. But I was hooked: the idea in the game was nothing I had ever seen before,
      and the novelty of it all really is what enticed me to keep playing. At this point, I had hardly had any
      experience with development, let alone web development, and it wasn&apos;t until right before the Eternity
      Challenges update around January 2018 that I joined the testing team.
      <br />
      <br />
      <div className="relative flex xs:flex-col md:flex-row justify-between items-center w-full">
        <div className="xs:w-full md:w-2/3">
          As I became more involved with the testing team, more content was added to the game, including the Time
          Dilation update, which was the last update for nearly four years. The extent of my contributions at this
          point was purely adding to various small things, like the how to play page, and throughout the rest of
          development it was prevalent for me in some (usually minor) ways. Prior to the Reality Update, the code
          was entirely written in HTML and JS, with no framework; part of the massive waiting between the Dilation
          update and the Reality update was the transition to Vue.js. Vue.js made development much faster overall,
          even for people who had never worked with it before, like me. I found myself looking over more and more
          facets of the codebase, which led to my desire to be involved in some way. These next four years proved
          to be some of the most influential in my life, for one reason or another.
        </div>
        <div className="xs:w-full md:w-1/3 p-4 flex flex-col">
          <Image
            src={contributions}
            className="w-full border-gray-700 border-2"
            alt="Image of my personal contributions to the AD codebase"
          />
          <div className="text-xs text-gray-500 opacity-80 pt-2">
            My contribution chart on the AD repository
          </div>
        </div>
      </div>
      <br />
      <br />
      From the release of the Dilation update in June 2018 to around August of the same year, details of
      the next update were pretty much completely hidden from the testers, but behind the scenes,
      Hevipelle, Omsi, and Razenpok were hard at work developing some of the basics of what would become
      the Reality Update. The update was massive in scope: nearly doubling the content of the current state of the
      game and introducing fairly novel mechanic ideas that kept the game fresh, and by extension, the genre fresh.
      Of course, with this massive scope came massive amounts of work, and Razenpok was responsible for streamlining
      our development process, and it was he who was responsible for the change to the Vue.js framework.
      He also improved our code style and etiquette dramatically, which was amazing for code readability.
      Once Hevipelle and Omsi found it to be semi-ready, they got the testers back together to begin a monumental task:
      testing the Reality Update.
      <br />
      <br />
      <div className="relative flex xs:flex-col md:flex-row justify-between items-center w-full">
        <div className="xs:w-full md:w-1/3 p-4 flex flex-col">
          <Image
            src={eternityModal}
            className="w-full border-gray-700 border-2"
            alt="Image of an example Eternity reset modal from AD"
          />
          <div className="text-xs text-gray-500 opacity-80 pt-2">
            An example Eternity reset modal, something I worked on
          </div>
        </div>
        <div className="xs:w-full md:w-2/3">
        The scope of my contributions at this point was still extremely limited, which, considering my experience
        with web development (and more specifically game development) at that time, wasn&apos;t too surprising.
        After a while, though, I found myself working on some pretty minor things, most of which didn&apos;t require
        too much experience (or wasn&apos;t something I could learn by looking at other code). By 2020, I was starting
        to contribute more to the game in some really small ways. One of the major things I worked on throughout the
        project was the addition of information and confirmation modals. These were what kept me working on the game,
        as pretty much any new feature was bound to come with a new confirmation modal that needed to be made.
        I semi-garnered a reputation as the modal-maker guy after a while (which stuck all the way through until the
        release of the update), and I felt like I had finally found something I could do, which was an amazing feeling.
        As time went on, and the desire to fully Vueify the codebase grew among developers, I also participated in
        migrating the main UI over to Vue along with my fellow developers. Throughout this time, the main portion of
        my contributions were small or minor quality of life changes or wording improvements. But what I did know is
        that this was something I <i>did</i> enjoy doing, even if the scale of what I did was small.
        </div>
      </div>
      <br />
      <br />
      I am eternally grateful for the opportunities that I gained from AD and the people I have met while working
      on it. The community opened up so much for me and even helped inspire me to create the Discord server companion
      bot, ADAnswersBot. These projects have further inspired my love for development and collaboration with
      like-minded folks.
      <br />
      <br />
      <div className="relative flex flex-col items-center w-full">
        <Image
          src={mainPage}
          className="w-full border-gray-700 border-2"
          alt="Screenshot of the Antimatter Dimensions tab"
          width={1920}
        />
        <div className="text-xs text-gray-500 opacity-80 pt-2 pb-2">
          Screenshot of the Antimatter Dimensions tab. This game changed my life, and I&apos;m so glad I got
          to experience it with the people I did.
        </div>
      </div>
      <div className="flex flex-row w-full place-items-center justify-center">
        <Icon className="text-white mr-0 mb-0" icon={faGithub}
          link="https://github.com/IvarK/AntimatterDimensionsSourceCode" />
        <Icon className="text-white mr-0 mb-0" icon={faGamepad} link="https://ivark.github.io/AntimatterDimensions" />
      </div>
    </div>
  </>
);

export default AntimatterDimensionsPage;