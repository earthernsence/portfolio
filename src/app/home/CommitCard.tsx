"use client";

import type { Commit, Repository } from "./types";
import Image from "next/image";
import URL from "../common/URL";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const CommitCard = (props: { repository: Repository }) => {
  const repo = props.repository;

  const { data, error, isLoading } = useSWR(
    `https://api.github.com/repos/earthernsence/${repo.name}/commits?per_page=1`,
    fetcher
  );

  if (error) throw new Error("Could not load commits list!");
  if (isLoading) return "Loading...";

  const commit: Commit = data[0];

  const userRepoString: string = `${commit.html_url.split("/")[3]} / ${commit.html_url.split("/")[4]}`;

  return (
    <>
      <div className="border-2 border-gray-500 flex rounded-lg flex-row w-full place-items-center p-4 mb-2 md:h-16">
        <Image
          className="flex border-gray-300 rounded-full border-2 h-12 w-12 mr-4"
          src={commit.author?.avatar_url ?? "#/projects/no_image.png"}
          alt="GitHub avatar"
          width={50}
          height={50}
        />
        <div className="flex flex-col text-left gap-y-1 w-full min-w-0">
          <div className="flex xs:flex-col md:flex-row text-left place-items-baseline min-w-0">
            <URL href={commit.html_url} className="text-xs truncate min-w-0 w-full md:flex-1">
              {commit.commit.message}
            </URL>
            {/*
              This URL split takes a URL like https://github.com/earthernsence/ADAnswers-Bot/
              and finds the repository owner and repository name.
              We do this here because for some reason trying to collect the repository names
              in the page.tsx file results in them being rendered out of order sometimes.
              Doing it like this works for sure and skips all of the nonsense of doing it in page
            */}
            <div className="text-[10px] xs:pt-1 md:pt-0 md:pl-1 text-gray-500 flex-shrink-0 md:whitespace-nowrap">
              ({userRepoString})
            </div>
          </div>
          <div className="text-gray-400 text-xs">
            Updated on {new Date(commit.commit.committer?.date ?? 0).toDateString()}
          </div>
        </div>
      </div>
    </>
  );
};
