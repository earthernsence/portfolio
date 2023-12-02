"use client";

import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";
import { CommitCard } from "./CommitCard";

type GitUser = {
  name: string,
  email: string,
  date: string
}

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

interface OctokitResponse<T, S extends number = number> {
    headers: {
    "cache-control"?: string;
    "content-length"?: number;
    "content-type"?: string;
    date?: string;
    etag?: string;
    "last-modified"?: string;
    link?: string;
    location?: string;
    server?: string;
    status?: string;
    vary?: string;
    "x-github-mediatype"?: string;
    "x-github-request-id"?: string;
    "x-oauth-scopes"?: string;
    "x-ratelimit-limit"?: string;
    "x-ratelimit-remaining"?: string;
    "x-ratelimit-reset"?: string;
    [header: string]: string | number | undefined;
  };

    /**
     * http response code
     */
    status: S;
    /**
     * URL of response after all redirects
     */
    url: string;
    /**
     * Response data as documented in the REST API reference documentation at https://docs.github.com/rest/reference
     */
    data: T;
}



export const CommitsList = () => {
  const [commits, setCommits] = useState<OctokitResponse<any | Commit, number>>();

  useEffect(() => {
    const octokit = new Octokit({ auth: process.env.GH_TOKEN });
    const owner = "earthernsence",
          repo = "etch-a-sketch-svelte",
          perPage = 5;

    const fiveRecentCommits = async() => await octokit.request(
      `GET /repos/${owner}/${repo}/commits`, { owner, repo, per_page: perPage }
    ).then((commits) => { 
      setCommits(commits);
      console.log(commits);
    });

    fiveRecentCommits();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="text-xs italic text-left text-gray-500 opacity-80">
          recent commits...
        </div>
        <br />
        <div className="flex flex-col justify-between">
          {
            commits
            ? [...commits.data].map((commit: Commit) => (
              <CommitCard commit={commit} key={commit.sha} />
            ))
            : <div className="text-s text-left text-gray-500">No recent commits to display</div>
          }
        </div>
      </div>
    </>
  )
}

export default CommitsList;