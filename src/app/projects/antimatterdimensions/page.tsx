import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects: Antimatter Dimensions",
};

const AntimatterDimensionsPage = () => (
  <>
    <div className="place-self-center w-full max-w-7xl pt-0 pb-12 pl-16 pr-16 xs:text-left md:text-justify">
      <div className="text-4xl xs:text-center md:text-left">Antimatter Dimensions</div>
      <br />
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
      works, the player may find themselves <i>back</i> at old content; though it is buffed by some
      feature of the new content unlocked via the prestige.
    </div>
  </>
);

export default AntimatterDimensionsPage;