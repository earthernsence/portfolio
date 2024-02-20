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

  const protect = (value: string) => parseInt(value === "" ? "0" : value, 10);

  const getCurrentTimeSpan = () => TimeSpan.fromHours(protect(inputTextHours))
    .plus(TimeSpan.fromMinutes(protect(inputTextMinutes)))
    .plus(TimeSpan.fromSeconds(protect(inputTextSeconds)));

  function addTime(time: TimeSpan) {
    if (time._ms === 0) return;
    props.setTimes([ ...props.times, time]);
  }

  function clearTimes() {
    props.setTimes([]);
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
      <div className="flex flex-row justify-between content-center">
        <button
          type="button"
          onClick={() => addTime(getCurrentTimeSpan())}
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-xs"
        >
          Add time...
        </button>
        <button
          type="button"
          onClick={() => clearTimes()}
          className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded text-xs"
        >
          Clear times...
        </button>
      </div>
    </div>
  );
}