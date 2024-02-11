"use client";

import TimeList from "./TimeList";
import TimeInputs from "./TimeInputs";
import { useState } from "react";
import { TimeSpan } from "./TimeSpan";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utilities: Time Calculator"
};

export default function TimeCalculator() {
  const [times, setTimes] = useState([] as Array<TimeSpan>);

  return (
    <main className="flex flex-col items-center justify-between place-self-center pt-4">
      <div className="text-2xl pb-4">Time Calculator</div>
      <TimeList times={times} />
      <br />
      <TimeInputs times={times} setTimes={setTimes} />
      <br />
      {
        times.length > 0 ? 
          <div className="text-lg">
            This equates to{" "}
            { `${times.reduce((accumulator, currentValue) => accumulator.plus(currentValue), new TimeSpan(0))}`}
          </div>
        : <div className="text-lg">Add a time to see further information...</div>
      }
    </main>
  );
}