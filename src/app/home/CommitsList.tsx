"use client";

import { CommitCard } from "./CommitCard";
import { Repository } from "./types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const CommitsList = () => {
  const { data, error, isLoading } = useSWR("https://api.github.com/users/earthernsence/repos?sort=updated", fetcher);

  if (error) throw new Error("Could not load repositories list");
  if (isLoading) return "Loading...";

  const repositories: Array<Repository> = data.slice(0, 5);

  return (
    <>
      <div className="flex flex-col">
        <div className="text-xs italic text-left text-gray-500 opacity-80">recent commits...</div>
        <div className="text-xs italic text-left text-gray-600 opacity-80">
          this shows my 5 most recently updated repositories and their most recent commit
        </div>
        <br />
        <br />
        <div className="flex flex-col justify-between">
          {repositories ? (
            repositories.map((repository: Repository) => <CommitCard repository={repository} key={repository.id} />)
          ) : (
            <div className="text-s text-left text-gray-500">No recent commits to display</div>
          )}
        </div>
      </div>
    </>
  );
};

export default CommitsList;
