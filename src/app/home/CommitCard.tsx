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

  if (error) throw new Error("Could not load commits list");
  if (isLoading) return "Loading...";

  const commit: Commit = data[0];

  return (
    <>
      <div className="border-4 border-gray-500 flex rounded-lg flex-row w-full place-items-center p-4 mb-2 md:h-16">
        <Image
          className="flex border-gray-300 rounded-full border-2 h-12 w-12 mr-4"
          src={commit.author?.avatar_url ?? "../assets/projects/no_image.png"}
          alt="Github avatar" width={50} height={50}
        />
        <div className="flex flex-col text-left">
          <div className="flex flex-row text-left place-items-baseline">
            <URL href={commit.html_url} className="text-xs pr-1">{ commit.commit.message }</URL>
            {/*
              This URL split takes a URL like https://github.com/earthernsence/ADAnswers-Bot/
              and finds the repository name.
              We do this here because for some reason trying to collect the repository names
              in the page.tsx file results in them being rendered out of order sometimes.
              Doing it like this works for sure and skips all of the nonsense of doing it in page
            */}
            <div className="text-[9px] text-gray-700">({ commit.html_url.split("/")[4] })</div>
          </div>
          <div className="text-gray-400 text-xs">
          Updated on { new Date(commit.commit.committer?.date ?? 0).toDateString() }
          </div>
        </div>
      </div>
    </>
  );
};