"use client";

import { ChangeEvent, useEffect, useState } from "react";

import Time from "./Time";
import { TimeSpan } from "./TimeSpan";

interface TimeListProps {
  times: Array<TimeSpan>
}

interface TimeComponents {
  hours: number,
  minutes: number,
  seconds: number
}

export default function TimeList({ times }: TimeListProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [timeInfo, setTimeInfo] = useState<Array<TimeComponents>>([]);
  const [tableView, setTableView] = useState(false);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    const timesAsComponents: Array<TimeComponents> = [];
    for (const time of times) {
      const info = { hours: time.hours, minutes: time.minutes, seconds: time.seconds };
      timesAsComponents.push(info);
    }

    setTimeInfo(() => [...timesAsComponents]);
  }, [times]);

  if (!isMounted || !times || times.length === 0) return null;

  const changeView = (event: ChangeEvent<HTMLInputElement>) => {
    setTableView(event.target.checked);
  };

  return (
    <>
      <div className="inline-flex flex-row gap-x-1">
        <input type="checkbox" id="tableView" name="tableView" onChange={event => changeView(event)} />
        View times as table?
      </div>
      <br />
      {!tableView && (
        <div className="flex flex-col items-center font-mono text-lg">
          {times.map((time: TimeSpan, index: number) =>
            <Time time={time} key={index} />
          )}
        </div>
      )}
      {tableView && (
        <table>
          <thead>
            <tr>
              <th className="border border-white py-1 px-2 text-sm" scope="col">Hours</th>
              <th className="border border-white py-1 px-2 text-sm" scope="col">Minutes</th>
              <th className="border border-white py-1 px-2 text-sm" scope="col">Seconds</th>
            </tr>
          </thead>
          <tbody>
            {timeInfo.map((time: TimeComponents, index: number) =>
              <tr key={index}>
                <th className="border border-white py-1 px-2 text-sm">{time.hours}h</th>
                <th className="border border-white py-1 px-2 text-sm">{time.minutes}m</th>
                <th className="border border-white py-1 px-2 text-sm">{time.seconds}s</th>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </>
  );
}