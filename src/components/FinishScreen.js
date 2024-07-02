export default function FinishScreen({
  points,
  maxPoints,
  highScore,
  dispatch,
}) {
  const percentage = Math.ceil((points / maxPoints) * 100);
  let emoji;

  if (percentage > 90) {
    emoji = "🥇";
  } else if (percentage > 75) {
    emoji = "🎉";
  } else if (percentage > 50) {
    emoji = "👍";
  } else {
    emoji = "🙁";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        <strong>{maxPoints}</strong> ({percentage}%)
      </p>
      <p className="highscore">(High score : {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
