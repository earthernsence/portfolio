import { TimeSpan } from "./TimeSpan";

export default function Time(props: { time: TimeSpan, shortenedTime?: boolean }) {
  const time = props.time;
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex">
        {props.shortenedTime ? time.toStringShort() : time.toString() }
      </div>
    </div>
  );
}