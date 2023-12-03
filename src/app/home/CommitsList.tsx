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

type RepoOwner = {
  name?: string | null | undefined,
  email?: string | null | undefined,
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string | null,
  url: string,
}

type Repository = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: RepoOwner;
  html_url: string;
}

export const CommitsList = () => {
  const [recentCommits, setRecentCommits] = useState<Array<Commit>>();
  const [hasLoaded, setHasLoaded] = useState(false);

  // This might be magic.
  useEffect(() => {
    const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GH_TOKEN });
    const owner = "earthernsence",
          perPage = 1;

    setHasLoaded(false);

    const fetchUserRepositories = async() => await octokit.request(
      `GET /users/{username}/repos`, { username: owner, type: "owner", sort: "updated" }
    ).then((repos) => {
      const commitInfo: Array<Commit> = [];

      [...repos.data.slice(0, 5)].forEach(repository => {
        const recentCommit = async() => await octokit.request(
          `GET /repos/{owner}/{repo}/commits`, { owner, repo: repository.name, per_page: perPage }
        ).then(commits => {
          commitInfo.push(...commits.data);
        });

        recentCommit();
      });

      setRecentCommits(commitInfo);

      return commitInfo;
    });

    fetchUserRepositories().then(() => setTimeout(() => setHasLoaded(true), 1000));

    // const fiveRecentCommits = async() => await octokit.request(
    //   `GET /repos/${owner}/${repo}/commits`, { owner, repo, per_page: perPage }
    // ).then((commits) => { 
    //   setCommits(commits);
    // });

    // fiveRecentCommits();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="text-xs italic text-left text-gray-500 opacity-80">
          recent commits...
        </div>
        <div className="text-xs italic text-left text-gray-600 opacity-80">
          this shows my 5 most recently updated repositories and their most recent commit
        </div>
        <br />
        <div className="flex flex-col justify-between">
          {
            (hasLoaded && recentCommits)
            ? recentCommits.map((commit: Commit) => (
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