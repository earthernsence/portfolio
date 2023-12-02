"use client";

import TimeList from "./TimeList";
import TimeInputs from "./TimeInputs";

export default function TimeCalculator() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="text-lg">Time Calculator</div>
      <TimeList />
      <TimeInputs />
    </main>
  )
}