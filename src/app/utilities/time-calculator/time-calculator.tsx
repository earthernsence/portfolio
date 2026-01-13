"use client";

import { useState } from "react";

import TimeInputs from "./TimeInputs";
import TimeList from "./TimeList";
import { TimeSpan } from "./TimeSpan";

export default function TimeCalculator() {
  const [times, setTimes] = useState([] as Array<TimeSpan>);

  return (
    <main className="flex flex-col items-center justify-between place-self-center pt-4">
      <div className="text-2xl pb-4">Time Calculator</div>
      <TimeInputs times={times} setTimes={setTimes} />
      <br />
      <TimeList times={times} />
      <br />
      {times.length > 0 ? (
        <div className="text-lg">
          This equates to{" "}
          {`${times.reduce((accumulator, currentValue) => accumulator.plus(currentValue), new TimeSpan(0))}`}
        </div>
      ) : (
        <div className="text-lg">Add a time to see further information...</div>
      )}
    </main>
  );
}
