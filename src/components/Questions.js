export default function Questions({ question, dispatch }) {
  const { question: currQuestion, options, correctOption } = question;
  return (
    <div>
      <h4>{currQuestion}</h4>
      <Options options={options} />
    </div>
  );
}

function Options({ options }) {
  return (
    <div className="options">
      {options.map((option) => (
        <button className="btn btn-option" key={option}>
          {option}
        </button>
      ))}
    </div>
  );
}
