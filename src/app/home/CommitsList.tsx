"use client";

import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";
import { CommitCard } from "./CommitCard";
import type { Commit } from "./types";

export const CommitsList = () => {
  const [recentCommits, setRecentCommits] = useState<Array<Commit>>();
  const [hasLoaded, setHasLoaded] = useState(false);

  // This might be magic.
  useEffect(() => {
    // TODO: rewrite with SWR
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