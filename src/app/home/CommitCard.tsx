import Image from "next/image"
import URL from "../common/URL"

type User = {
  name?: string | null | undefined,
  email?: string | null | undefined,
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string | null,
  url: string,
}

type Committer = {
  name?: string | undefined,
  email?: string | undefined,
  date?: string | undefined
}

type Commit = {
    url: string,
    sha: string,
    node_id: string,
    html_url: string,
    comments_url: string,
    commit: {
      url: string,
      author: null | Committer
      committer: null | Committer
      message: string,
      comment_count: number,
      tree: {
        sha: string,
        url: string,
      },
      verification?: {
        verified: boolean,
        reason: string,
        payload: string | null,
        signature: string | null,
      } | undefined
    },
    author?: null | User,
    committer?: null | User,
    stats?: {
      additions?: number | undefined,
      deletions?: number | undefined,
    }
}

export const CommitCard = (props: { commit: Commit }) => {
  const commit = props.commit;

  return (
    <div className="border-4 border-gray-500 flex rounded-lg flex-row h-16 place-items-center p-4 mb-2">
      <Image className="flex border-gray-300 rounded-full border-2 h-12 w-12 mr-4" src={commit.author?.avatar_url ?? "../assets/projects/no_image.png"} alt="Github avatar" width={50} height={50} />
      <div className="flex flex-col text-left">
        <div className="flex flex-row text-left place-items-baseline">
          <URL href={commit.html_url} className="text-xs pr-1">{ commit.commit.message }</URL>
          <div className="text-[9px] text-gray-700">({ commit.html_url.split("/")[4] })</div>
        </div>
        <div className="text-gray-400 text-xs">{ new Date(commit.commit.committer?.date ?? 0).toDateString() }</div>
      </div>
    </div>
  )
}