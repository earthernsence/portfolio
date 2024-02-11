import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { TimeSpan } from "./TimeSpan";

export default function TimeInputs(props: { times: Array<TimeSpan>, setTimes: Dispatch<SetStateAction<Array<TimeSpan>>> }) {
  const [inputTextHours, setInputTextHours] = useState("0");
  const [inputTextMinutes, setInputTextMinutes] = useState("0");
  const [inputTextSeconds, setInputTextSeconds] = useState("0");

  const setters: { [key: string]: Dispatch<SetStateAction<string>> } = {
    "hours": setInputTextHours,
    "minutes": setInputTextMinutes,
    "seconds": setInputTextSeconds
  };

  const getChangeHandler = (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setters[type](event.target.value);
  };

  const getCurrentTimeSpan = () => TimeSpan.fromHours(parseInt(inputTextHours, 10))
    .plus(TimeSpan.fromMinutes(parseInt(inputTextMinutes, 10)))
    .plus(TimeSpan.fromSeconds(parseInt(inputTextSeconds, 10)));

  function addTime(time: TimeSpan) {
    if (time._ms === 0) return;
    props.setTimes([ ...props.times, time]);
  } 

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col pl-2 pr-2">
          <input
            name="hours"
            type="number"
            min="0"
            max="23"
            placeholder="hours"
            className="text-black"
            onChange={event => getChangeHandler("hours")(event) }
          />
          <div className="flex text-xs pl-4 pr-4">hours</div>
        </div>
        <div className="flex flex-col pl-2 pr-2">
          <input
            name="minutes"
            type="number"
            min="0"
            max="59"
            placeholder="minutes"
            className="text-black"
            onChange={event => getChangeHandler("minutes")(event) }
          />
          <div className="flex text-xs pl-4 pr-4">minutes</div>
        </div>
        <div className="flex flex-col pl-2 pr-2">
          <input
            name="seconds"
            type="number"
            min="0"
            max="59"
            placeholder="seconds"
            className="text-black"
            onChange={event => getChangeHandler("seconds")(event) }
          />
          <div className="flex text-xs pl-4 pr-4">seconds</div>
        </div>
      </div>
      <br />
      <div className="flex content-center justify-center">
        <button
          type="button"
          onClick={() => addTime(getCurrentTimeSpan())}
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-xs"
        >
          Add time...
        </button>
      </div>
    </div>
  );
}