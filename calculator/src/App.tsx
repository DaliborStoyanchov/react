import { useState } from "react";

interface State {
  total: string | null;
  next: string | null;
  operation: string | null;
}

const initialState: State = {
  total: null,
  next: null,
  operation: null,
};

const isNumber = (item: string): boolean => {
  return /[0-9]+/.test(item);
};

const calculate = (state: State, name: string): State => {
  if (name === "AC") {
    return initialState;
  }

  if (isNumber(name)) {
    if (state.next) {
      const next = state.next === "0" ? name : state.next + name;

      return { ...state, next };
    }

    return { ...state, next: name };
  }

  return state;
};

const App = () => {
  const [state, setState] = useState<State>(initialState);
  console.log("STATE: ", state);

  const handleClick = (name: string): void => {
    const newState = calculate(state, name);

    setState(newState);
  };

  return (
    <div className="calculator">
      <div className="screen">
        <div className="operation-screen">0</div>
        <div className="display">0</div>
      </div>
      <div className="button-panel">
        <button className="button" onClick={() => handleClick("AC")}>
          AC
        </button>
        <button onClick={() => handleClick("C")} className="button">
          C
        </button>
        <button onClick={() => handleClick("%")} className="button">
          %
        </button>
        <button onClick={() => handleClick("/")} className="button operation">
          /
        </button>

        <button onClick={() => handleClick("7")} className="button">
          7
        </button>
        <button onClick={() => handleClick("8")} className="button">
          8
        </button>
        <button onClick={() => handleClick("9")} className="button">
          9
        </button>
        <button onClick={() => handleClick("X")} className="button operation">
          x
        </button>

        <button onClick={() => handleClick("4")} className="button">
          4
        </button>
        <button onClick={() => handleClick("5")} className="button">
          5
        </button>
        <button onClick={() => handleClick("6")} className="button">
          6
        </button>
        <button onClick={() => handleClick("-")} className="button operation">
          -
        </button>

        <button onClick={() => handleClick("1")} className="button">
          1
        </button>
        <button onClick={() => handleClick("2")} className="button">
          2
        </button>
        <button onClick={() => handleClick("3")} className="button">
          3
        </button>
        <button onClick={() => handleClick("+")} className="button operation">
          +
        </button>
        <button onClick={() => handleClick("0")} className="button col-span">
          0
        </button>
        <button onClick={() => handleClick(".")} className="button">
          .
        </button>

        <button
          onClick={() => handleClick("=")}
          className="button operation equals"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default App;
