import CommitsList from "./CommitsList";
import URL from "../common/URL";

const HomePage = () => (
  <>
    <div className="place-self-center max-w-6xl pt-0 pb-12 pl-16 pr-16 transform translate-y-1/4 h-2/4 w-2/4">
        Welcome to my vaguely professional website!
      <br />
      <br />
        I am using this website as effectively a portfolio for anything I have worked on recently.
        This website is also my first experience with React (with next.js), so I am learning along the way!
      <br />
      <div className="text-gray-500 text-xs">
        Major thanks to cyip92 and <URL href="https://cyip92.github.io/site">his website</URL> for some
        code & inspiration!
      </div>
      <br />
      <br />
      <CommitsList />
    </div>
  </>
);

export default HomePage;