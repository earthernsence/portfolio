import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects: Antimatter Dimensions",
};

const AntimatterDimensionsPage = () => (
  <>
    <div className="place-self-center w-full max-w-full pt-0 pb-12 pl-16 pr-16 text-left">
      <div className="text-4xl underline">Antimatter Dimensions</div>

      Antimatter Dimensions is an idle/incremental game made for web browsers by a Finnish developer, Hevipelle.
      The game revolves around the user&apos;s moment-by-moment actions that are often extremely simple - but these
      actions are distinct from what the player does on a larger timescale. AD uses a structure like this & takes a
      (fairly) simple idea (one thing generates another) and expands heavily on it with several variations that are
      supplemented by paradigm shifts resulting from large prestige resets.
    </div>
  </>
);

export default AntimatterDimensionsPage;