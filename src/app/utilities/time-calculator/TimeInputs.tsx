import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { TimeSpan } from "./TimeSpan";
import Globals from "../../globals";

export default function TimeInputs() {
  const [inputTextHours, setInputTextHours] = useState("");
  const [inputTextMinutes, setInputTextMinutes] = useState("");
  const [inputTextSeconds, setInputTextSeconds] = useState("");

  const setters: { [key: string]: Dispatch<SetStateAction<string>> } = {
    "hours": setInputTextHours,
    "minutes": setInputTextMinutes,
    "seconds": setInputTextSeconds
  };

  const getChangeHandler = (type: string) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setters[type](event.target.value);
      console.log(event.target.value);
    }
  }

  const getCurrentTimeSpan = () => {
    return TimeSpan.fromHours(parseInt(inputTextHours, 10))
      .plus(TimeSpan.fromMinutes(parseInt(inputTextMinutes, 10)))
      .plus(TimeSpan.fromSeconds(parseInt(inputTextSeconds, 10)));
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <input 
          name="hours" 
          type="number" 
          min="0" 
          max="23" 
          placeholder="hours" 
          className="text-black"
          onChange={event => getChangeHandler("hours")(event) } 
        />
        <input 
          name="minutes" 
          type="number" 
          min="0" 
          max="59" 
          placeholder="minutes"
          onChange={event => getChangeHandler("minutes")(event) }
        />
        <input 
          name="seconds"
          type="number"
          min="0"
          max="59"
          placeholder="seconds"
          onChange={event => getChangeHandler("seconds")(event) }
        />
      </div>
      <br />
      <div className="flex content-center justify-center">
        <button 
          type="button"
          onClick={() => Globals.times.push(getCurrentTimeSpan())} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-xs"
        >
          Add time...
        </button>
      </div>
    </div>
  )
}