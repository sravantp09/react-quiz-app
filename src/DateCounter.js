import { useState, useReducer } from "react";

const initialState = { count: 0, step: 1 };

function countReducer(state, action) {
  if (action.type === "inc") {
    return state + action.payload;
  }
  if (action.type === "dec") {
    return state - action.payload;
  }
  if (action.type === "setCount") return action.payload;
}

function reducer(state, action) {
  if (action.type === "dec") {
    return {
      ...state,
      count: state.count - state.step,
    };
  }
  if (action.type === "inc") {
    return {
      ...state,
      count: state.count + state.step,
    };
  }

  if (action.type === "setCount") {
    return {
      ...state,
      count: action.payload,
    };
  }

  if (action.type === "setStep") {
    return {
      ...state,
      step: action.payload,
    };
  }

  if (action.type === "reset") {
    return initialState;
  }
}

export default function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  // const [count, countDispatch] = useReducer(countReducer, 0);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    // countDispatch({ type: "dec", payload: step });
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    // countDispatch({ type: "inc", payload: step });
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    // countDispatch({ type: "setCount", payload: Number(e.target.value) });
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // countDispatch({ type: "setCount", payload: 0 });
    // setStep(1);
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
