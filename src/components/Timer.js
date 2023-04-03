import { useDispatch } from "react-redux";
import { toggleTimer, resetTimer } from "../features/timers/timersSlice";
import { formatTime } from "../utils";

export default function Timer({ index, name, time, isRunning }) {
  const dispatch = useDispatch();

  return (
    <div className="Timer">
      <div className="timer-info">
        <h2>{name}</h2>
        <h1>{formatTime(time)}</h1>
      </div>

      <div className="buttons">
        <button
          onClick={() => dispatch(toggleTimer(index))}
          className={isRunning ? "stop-button" : "start-button"}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => dispatch(resetTimer(index))}
          className="reset-button"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
