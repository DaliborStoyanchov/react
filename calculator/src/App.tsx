const App = () => {
  const handleClick = (name: string): void => {
    console.log("HANDLE CLICK: ", name);
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="screen">
          <div className="display">0</div>
        </div>
        <div className="button-panel">
          <div className="row-1">
            <button className="button" onClick={() => handleClick("AC")}>
              AC
            </button>
            <button onClick={() => handleClick("C")} className="button">
              C
            </button>
            <button onClick={() => handleClick("%")} className="button">
              %
            </button>
            <button
              onClick={() => handleClick("/")}
              className="button operation"
            >
              /
            </button>
            <div className="row-2">
              <button onClick={() => handleClick("7")} className="button">
                7
              </button>
              <button onClick={() => handleClick("8")} className="button">
                8
              </button>
              <button onClick={() => handleClick("9")} className="button">
                9
              </button>
              <button
                onClick={() => handleClick("X")}
                className="button operation"
              >
                x
              </button>
            </div>
            <div className="row-3">
              <button onClick={() => handleClick("4")} className="button">
                4
              </button>
              <button onClick={() => handleClick("5")} className="button">
                5
              </button>
              <button onClick={() => handleClick("6")} className="button">
                6
              </button>
              <button
                onClick={() => handleClick("-")}
                className="button operation"
              >
                -
              </button>
            </div>
            <div className="row-4">
              <button onClick={() => handleClick("1")} className="button">
                1
              </button>
              <button onClick={() => handleClick("2")} className="button">
                2
              </button>
              <button onClick={() => handleClick("3")} className="button">
                3
              </button>
              <button
                onClick={() => handleClick("+")}
                className="button operation"
              >
                +
              </button>
            </div>
            <div className="last-row">
              <button
                onClick={() => handleClick("0")}
                className="button col-span"
              >
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
        </div>
      </div>
    </div>
  );
};

export default App;
