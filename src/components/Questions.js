export default function Questions({ question, dispatch, answer }) {
  const { question: currQuestion, options, correctOption } = question;

  return (
    <div>
      <h4>{currQuestion}</h4>
      <Options
        options={options}
        dispatch={dispatch}
        answer={answer}
        correctOption={correctOption}
      />
    </div>
  );
}

function Options({ options, dispatch, answer, correctOption }) {
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${answer == index ? "answer" : ""} ${
            answer !== null && (index == correctOption ? "correct" : "wrong")
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={answer !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
