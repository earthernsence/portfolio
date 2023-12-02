import Image from "next/image"
import URL from "../common/URL"

type User = {
  name: string | null,
  email: string | null,
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string | null,
  url: string,
}

type GitUser = {
  name: string,
  email: string,
  date: string
}

type Commit = {
    url: string,
    sha: string,
    node_id: string,
    html_url: string,
    comments_url: string,
    commit: {
      url: string,
      author: null | GitUser
      committer: GitUser
      message: string,
      comment_count: number,
      tree: {
        sha: string,
        url: string,
      },
      verification: {
        verified: boolean,
        reason: string,
        payload: string | null,
        signature: string | null,
      }
    },
    author: User,
    committer: null | User,
    stats: {
      additions: number,
      deletions: number,
    }
}

export const CommitCard = (props: { commit: Commit }) => {
  const commit = props.commit;

  console.log(commit);

  return (
    <div className="border-4 border-gray-500 flex rounded-lg flex-row h-16 place-items-center p-4 mb-2">
      <Image className="flex border-gray-300 rounded-full border-2 h-12 w-12 mr-4" src={commit.author.avatar_url} alt="Github avatar" width={50} height={50} />
      <div className="flex flex-col text-left">
        <URL href={commit.html_url} className="text-xs">{ commit.commit.message }</URL>
        <div className="text-gray-400 text-xs">{ new Date(commit.commit.committer.date).toDateString() }</div>
      </div>
    </div>
  )
}