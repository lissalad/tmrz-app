import { useDispatch } from "react-redux";
import { toggleTimer } from "../features/timers/timersSlice";
import { formatTime } from "../utils";

export default function Timer({ index, name, time, isRunning }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{name}</h2>
      <h1>{formatTime(time)}</h1>
      <button onClick={() => dispatch(toggleTimer(index))}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
}
