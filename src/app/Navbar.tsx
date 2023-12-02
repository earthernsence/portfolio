"use client";

import Link from "next/link";
import { useState } from "react";

type Tab = { route: string, text: string, leaves?: Array<Tab> };

const Tabs: Array<Tab> = [
  {
    route: "/",
    text: "Home"
  },
  {
    route: "/about",
    text: "About me",
  },
  {
    route: "/projects",
    text: "Projects",
    leaves: [
      {
        route: "/projects/antimatterdimensions/",
        text: "Antimatter Dimensions"
      }
    ]
  }
];

export const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const selectedClass = `bg-gradient-to-b from-gray-500 to-gray-400 from-90%`;

  return (
    <>
    <div className="top-0 flex flex-row justify-start items-center -mb-2 border-1 border-white w-full h-14 bg-gradient-to-b from-gray-500 from-90% to-transparent z-1">
        {
          Tabs.map((tab: Tab) =>
            <Link
              className={`flex justify-center items-center w-60 h-14 leading-tight text-black hover:bg-gradient-to-b hover:from-gray-500 hover:to-gray-400 hover:from-90% hover:text-black ${tab.text === selectedTab ? selectedClass : ""}`}
              href={tab.route}
              key={tab.text}
              onClick={() => setSelectedTab(tab.text)}
            >
              { tab.text }
            </Link>
          )
        }
      </div>
    </>
  )
}

export default Navbar;