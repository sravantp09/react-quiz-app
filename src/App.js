import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
import Button from "./components/Button";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";

const initialState = {
  questions: [],
  status: "loading", // Can have other states like, 'ready', 'error', 'active', 'finished'
  index: 0,
  answer: null,
  score: 0,
  highScore: 0,
}; // index -> used to keep track current question

function reducer(state, action) {
  switch (action.type) {
    case "dataFetched":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "startQuiz":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const { points, correctOption } = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        score:
          action.payload === correctOption ? state.score + points : state.score, // score updating
      };
    case "nextQuestion":
      const newIndex = state.index + 1;

      if (newIndex > state.questions.length - 1) {
        return {
          ...state,
          answer: null,
          status: "finished",
          highScore:
            state.score > state.highScore ? state.score : state.highScore,
        };
      } else {
        return {
          ...state,
          index: newIndex,
          answer: null,
        };
      }
    case "restartQuiz":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        score: 0,
      };
    default:
      throw new Error("Unknown action");
  }
}

function calculateTotalScore(questions) {
  return questions.reduce((acc, que) => acc + que.points, 0);
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, score, highScore } = state; // destructuring state
  let totalScore = 0;

  // Calculating total score
  if (questions.length > 0) {
    totalScore = calculateTotalScore(questions);
  }

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();

        dispatch({ type: "dataFetched", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={questions?.length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            {/* progress bar and scores out of total score */}
            <Progress
              index={index}
              totalQuestions={questions.length}
              points={score}
              totalPoints={totalScore}
              answer={answer}
            />
            <Questions
              question={questions.at(index)}
              dispatch={dispatch}
              answer={answer}
            />
            {/* Next Button */}
            {answer !== null && (
              <Button
                index={index}
                totalQuestions={questions.length}
                dispatch={dispatch}
              />
            )}
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={score}
            maxPoints={totalScore}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
