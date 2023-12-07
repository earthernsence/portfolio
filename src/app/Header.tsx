"use client";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      },
    ]
  }
];

const LinkDropdown = (props: { tab: Tab }) => {
  if (!props.tab.leaves) throw new Error("A LinkDropdown component can only be used with leaves!");
  return (
    <div className="flex absolute z-50 min-w-[10rem] p-2 justify-items-center flex-col bg-slate-700
                    transition-all ease-linear duration-300 rounded-md">
      {
        props.tab.leaves.map((leaf: Tab, index: number) =>
          <Link
            className="text-white m-1 hover:underline"
            href={leaf.route}
            key={index}
          >
            { leaf.text }
          </Link>
        )
      }
    </div>
  );
};

const ExpandableLinkEntry = (props: { tab: Tab }) => {
  const tab = props.tab;
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  if (!tab.leaves) throw new Error("An ExpandableLinkEntry component can only be used with leaves!");

  return (
    <Link
      className="text-white underline items-center"
      href={tab.route}
      key={tab.text}
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      { tab.text } { tab.leaves ? <FontAwesomeIcon icon={faCaretDown} /> : ""}
      { isDropdownVisible ? <LinkDropdown tab={tab} /> : null }
    </Link>
  );
};

export const Header = () => (
  <>
    <header className="flex w-full pt-2 pb-2 pr-4 pl-4">
      <nav className="flex flex-row place-self-center items-center
                      xs:w-full sm:w-3/4 lg:w-2/4">
        <div className="text-center sm:text-3xl xs:text-xl text-white mr-4">
          <Link href="/">jroyvibes</Link>
        </div>
        <br />
        <div className="flex flex-row text-sm w-full justify-around flex-wrap list-none items-center">
          {
            Tabs.filter(tab => tab.text !== "Home").map((tab: Tab, index: number) => (tab.leaves
              ? <ExpandableLinkEntry tab={tab} key={index} />
              : <Link
                className="text-white underline"
                href={tab.route}
                key={index}
              >
                { tab.text } { tab.leaves ? <FontAwesomeIcon icon={faCaretDown} /> : ""}
              </Link>)
            )
          }
        </div>
      </nav>
    </header>
  </>
);

export default Header;