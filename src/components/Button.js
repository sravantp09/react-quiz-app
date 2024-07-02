export default function Button({ dispatch, index, totalQuestions }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      {index === totalQuestions - 1 ? "Finish" : "Next"}
    </button>
  );
}
