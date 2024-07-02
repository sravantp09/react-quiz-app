import ProgressBar from "./ProgressBar";

export default function Progress({
  index,
  totalQuestions,
  points,
  totalPoints,
  answer,
}) {
  return (
    <>
      <ProgressBar
        start={answer !== null ? index + 1 : index} // makes the progress bar moves when we click on the answer
        limit={totalQuestions}
      />
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
