import { useEffect } from "react";

export default function Timer({ time, dispatch }) {
  let mins = Math.floor(time / 60);
  let seconds = time - mins * 60;

  mins = mins < 10 ? `0${mins}` : mins;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "updateTimer" });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <button className="btn" disabled>
      {mins} : {seconds}
    </button>
  );
}
