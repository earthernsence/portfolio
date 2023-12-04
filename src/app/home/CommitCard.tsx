import Image from "next/image"
import URL from "../common/URL"
import type { Commit } from "./types";

export const CommitCard = (props: { commit: Commit }) => {
  const commit = props.commit;

  return (
    <div className="border-4 border-gray-500 flex rounded-lg flex-row h-16 place-items-center p-4 mb-2">
      <Image className="flex border-gray-300 rounded-full border-2 h-12 w-12 mr-4" src={commit.author?.avatar_url ?? "../assets/projects/no_image.png"} alt="Github avatar" width={50} height={50} />
      <div className="flex flex-col text-left">
        <div className="flex flex-row text-left place-items-baseline">
          <URL href={commit.html_url} className="text-xs pr-1">{ commit.commit.message }</URL>
          {/* This URL split takes a URL like https://github.com/earthernsence/ADAnswers-Bot/ and finds the repository name */}
          <div className="text-[9px] text-gray-700">({ commit.html_url.split("/")[4] })</div>
        </div>
        <div className="text-gray-400 text-xs">{ new Date(commit.commit.committer?.date ?? 0).toDateString() }</div>
      </div>
    </div>
  )
}