import Big from "big.js";
import { useEffect, useRef, useState } from "react";

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

const operate = (state: State): string => {
  const one = Big(state.total ?? "0");
  const two = Big(state.next ?? "0");

  if (state.operation === "+") {
    return one.plus(two).toString();
  }

  if (state.operation === "-") {
    return one.minus(two).toString();
  }

  if (state.operation === "X") {
    return one.times(two).toString();
  }

  if (state.operation === "/") {
    if (state.next === "0") {
      return "ERROR";
    } else {
      return one.div(two).toString();
    }
  }

  throw new Error(`Unknown operator ${state.operation}`);
};

const calculate = (state: State, operandName: string): State => {
  if (operandName === "AC") {
    return initialState;
  }

  if (isNumber(operandName)) {
    if (state.next) {
      const next = state.next === "0" ? operandName : state.next + operandName;

      return { ...state, next };
    }

    return { ...state, next: operandName };
  }

  if (operandName === "=") {
    if (state.next && state.operation) {
      return {
        total: operate(state),
        next: operate(state),
        operation: null,
      };
    } else {
      return state;
    }
  }

  if (operandName === ".") {
    if (!state.next) {
      return {
        ...state,
        next: "0.",
      };
    }

    if (state.next.includes(".")) {
      return state;
    }

    return {
      ...state,
      next: state.next + ".",
    };
  }

  if (operandName === "%") {
    if (!state.next) {
      return state;
    }

    return {
      ...state,
      next: Big(state.next).div(Big("100")).toString(),
    };
  }

  if (operandName === "C") {
    if (state.total && state.next === null && state.operation) {
      if (state.operation) {
        return {
          ...state,
          operation: null,
        };
      }
    } else if (state.total === "0" && state.next === null && state.operation) {
      return {
        ...state,
        operation: null,
      };
    } else if (state.next) {
      if (state.next.length > 0) {
        if (state.next.length === 1) {
          return {
            ...state,
            next: null,
          };
        }
        return {
          ...state,
          next: state.next.slice(0, -1),
        };
      } else {
        return state;
      }
    }

    return state;
  }

  if (state.operation) {
    return {
      total: operate(state),
      next: null,
      operation: operandName,
    };
  }

  return {
    total: !state.total ? state.next : state.total,
    next: null,
    operation: operandName,
  };
};

const App = () => {
  const [state, setState] = useState<State>(initialState);

  const textRef = useRef<HTMLDivElement>(null);
  const calcRef = useRef<HTMLDivElement>(null);

  const display = state.next || state.total || "0";

  useEffect(() => {
    const adjustFontSize = () => {
      const textEl = textRef.current!;
      const calcEl = calcRef.current!;

      let fontSize = 60;

      textEl.style.fontSize = `${fontSize}px`;

      while (textEl.scrollWidth > calcEl.scrollWidth && fontSize > 10) {
        fontSize--;
        textEl.style.fontSize = `${fontSize}px`;
      }
    };

    adjustFontSize();
  }, [display]);

  const handleClick = (name: string): void => {
    const newState = calculate(state, name);

    setState(newState);
  };

  return (
    <div ref={calcRef} className="calculator">
      <div className="screen">
        <div className="display" ref={textRef}>
          {display}
        </div>
      </div>
      <div className="button-panel">
        <button onClick={() => handleClick("AC")} className="button">
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
          X
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
        <button onClick={() => handleClick("0")} className="button">
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
