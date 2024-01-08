import CommitsList from "./CommitsList";
import Link from "next/link";
import URL from "../common/URL";

const HomePage = () => (
  <>
    <div className="place-self-center pt-0 pb-12 pl-16 pr-16 transform h-2/4
                    xs:w-full xs:max-w-full xs:translate-y-10
                    md:max-w-6xl md:w-10/12
                    lg:max-w-6xl lg:w-2/4 lg:translate-y-1/4">
        Welcome!
      <br />
      <br />
        I am using this website as effectively a portfolio for anything I have worked on recently.
        This website is also my first experience with React (with next.js), so I am learning along the way!
      <br />
      <br />
      <div className="text-gray-500 text-xs">
        Major thanks to cyip92 and <URL href="https://cyip92.github.io/site">his website</URL> for some
        code & inspiration.
        You can also visit the source of this site <URL href="https://github.com/earthernsence/portfolio">here</URL>!
      </div>
      <br />
      <div className="text-gray-500 text-xs">
        I am also open to working on projects, like portfolio websites, for people.
        See <Link className="text-gray-400 text-xs hover:underline" href={"/about"}>my About page</Link> for
        more information!
      </div>
      <br />
      <CommitsList />
    </div>
  </>
);

export default HomePage;