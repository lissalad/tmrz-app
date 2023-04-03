import React from "react";
import { useSelector } from "react-redux";
import Timer from "./Timer";

export default function ListTimers() {
  const timers = useSelector((state) => state.timers.value);

  return (
    <div>
      {timers.map((timer, i) => {
        return <Timer {...timer} key={`timer-${i}`} index={i} />;
      })}
    </div>
  );
}
