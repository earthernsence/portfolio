import Time from "./Time";
import { TimeSpan } from "./TimeSpan";

export default function TimeList(props: { times: Array<TimeSpan> }) {
  return (
    <div className="flex flex-col items-center font-mono">
      {props.times.map((time: TimeSpan, index: number) =>
        <Time time={time} key={index} />
      )}
    </div>
  );
}