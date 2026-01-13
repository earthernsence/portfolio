import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState } from "react";
import { TimeSpan } from "./TimeSpan";

interface TimeInputsProps {
  times: Array<TimeSpan>;
  setTimes: Dispatch<SetStateAction<Array<TimeSpan>>>;
}

export default function TimeInputs({ times, setTimes }: TimeInputsProps) {
  const [inputTextHours, setInputTextHours] = useState("0");
  const [inputTextMinutes, setInputTextMinutes] = useState("0");
  const [inputTextSeconds, setInputTextSeconds] = useState("0");

  const resetInputs = () => {
    setInputTextHours("0");
    setInputTextMinutes("0");
    setInputTextSeconds("0");
  };

  const setters: { [key: string]: Dispatch<SetStateAction<string>> } = {
    hours: setInputTextHours,
    minutes: setInputTextMinutes,
    seconds: setInputTextSeconds
  };

  const getChangeHandler = (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setters[type](event.target.value);
  };

  const protect = (value: string) => parseInt(value === "" ? "0" : value, 10);

  const getCurrentTimeSpan = () =>
    TimeSpan.fromHours(protect(inputTextHours))
      .plus(TimeSpan.fromMinutes(protect(inputTextMinutes)))
      .plus(TimeSpan.fromSeconds(protect(inputTextSeconds)));

  function addTime(time: TimeSpan) {
    if (time._ms === 0) return;
    setTimes([...times, time]);
    resetInputs();
  }

  function clearTimes() {
    setTimes([]);
    resetInputs();
  }

  function enterPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "Enter") return;
    addTime(getCurrentTimeSpan());
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col pl-2 pr-2">
          <input
            value={inputTextHours}
            name="hours"
            type="number"
            min="0"
            max="23"
            placeholder="hours"
            className="text-black"
            onChange={event => getChangeHandler("hours")(event)}
            onKeyDown={event => enterPress(event)}
          />
          <div className="flex text-xs pl-4 pr-4">hours</div>
        </div>
        <div className="flex flex-col pl-2 pr-2">
          <input
            value={inputTextMinutes}
            name="minutes"
            type="number"
            min="0"
            max="59"
            placeholder="minutes"
            className="text-black"
            onChange={event => getChangeHandler("minutes")(event)}
            onKeyDown={event => enterPress(event)}
          />
          <div className="flex text-xs pl-4 pr-4">minutes</div>
        </div>
        <div className="flex flex-col pl-2 pr-2">
          <input
            value={inputTextSeconds}
            name="seconds"
            type="number"
            min="0"
            max="59"
            placeholder="seconds"
            className="text-black"
            onChange={event => getChangeHandler("seconds")(event)}
            onKeyDown={event => enterPress(event)}
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
