import { useState } from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";

function App() {
  let operands = [];
  for (let i = 0; i < 10; i++) {
    operands[i] = {
      symbol: i,
      cls: "white ",
      itemNumber: "item" + (i + 1),
    };
  }
  let operators = [
    {
      symbol: "+",
      cls: "black ",
      itemNumber: "item11",
    },
    {
      symbol: "-",
      cls: "black ",
      itemNumber: "item12",
    },
    {
      symbol: "x",
      cls: "black ",
      itemNumber: "item13",
    },
    {
      symbol: "/",
      cls: "black ",
      itemNumber: "item14",
    },
    {
      symbol: "C",
      cls: "red ",
      itemNumber: "item15",
    },
    {
      symbol: "=",
      cls: "yellow ",
      itemNumber: "item16",
    },
  ];
  //Variables
  let symbols = operands.concat(operators);
  let count = 0;
  // let Mode = "darkMode";

  //States
  const [state, setState] = useState("");
  const [lastCh, setLastCh] = useState("");
  const [Mode, setMode] = useState(false);

  //Functions
  const expression = (value) => {
    if (state.length < 10) {
      setLastCh(value);
      if (value != "=" && value != "C") {
        setState(state + value);
      }
    }
  };
  const evaluate = (value) => {
    if (value == "=") {
      if (lastCh == "+" || lastCh == "-" || lastCh == "x" || lastCh == "/") {
        setState("ERROR");
      } else if (lastCh == "") {
        setState("NO INPUT");
      } else {
        setState("" + eval(state));
      }
    }
  };
  const clearScreen = (value) => {
    if (value == "C") {
      mode();
      setLastCh("");
      setState("");
    }
  };
  const mode = () => {
    if (state.length == 0) {
      count = count + 1;
    }
    if (count == 2) {
      setMode(true);
      count = 0;
    } else {
      setMode(false);
    }
  };
  //Main Function
  const dataShare = (value) => {
    //Screen Expression Generator
    expression(value);
    //Evaluate Screen
    evaluate(value);
    // Clear Screen
    clearScreen(value);
  };

  return (
    <>
      <div className={"calculator " + (Mode ? "darkMode" : "lightMode")}>
        <div
          className={
            "tilesBlock " + (Mode ? "calBorderDark" : "calBorderLight")
          }
        >
          <Screen value={state} />
          <div className="tiles">
            {symbols.map((listItem, index) => (
              <Button
                dataShare={dataShare}
                key={index}
                text={listItem.symbol}
                cls={listItem.cls}
                position={listItem.itemNumber}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
