import { useState } from "react";
import Globals from "../../globals";
import Time from "./Time"
import { TimeSpan } from "./TimeSpan"

export default function TimeList() {
  const [times, setTimes] = useState(Globals.times);
  return (
    <div className="flex flex-col items-center font-mono">
      {times.map((time: TimeSpan, index: number) => 
        <Time time={time} key={index} />
      )}
    </div>
  )
}