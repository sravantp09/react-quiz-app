import ProgressBar from "./ProgressBar";

export default function Progress({
  index,
  totalQuestions,
  points,
  totalPoints,
}) {
  return (
    <>
      <ProgressBar start={index} limit={totalQuestions} />
      <div className="progress">
        <p>
          Questions{" "}
          <strong>
            {index + 1} / {totalQuestions}
          </strong>
        </p>
        <p>
          Points{" "}
          <strong>
            {points} / {totalPoints}
          </strong>
        </p>
      </div>
    </>
  );
}
