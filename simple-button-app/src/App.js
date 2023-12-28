import { useState } from "react";
import "./App.css";
import { kebabCaseToTitleCase } from "./helpers";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const nextColor =
    buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const className = disabled ? "gray" : buttonColor;

  return (
    <div className="App">
      <button
        className={className}
        disabled={disabled}
        onClick={() => setButtonColor(nextColor)}
      >
        Change to {kebabCaseToTitleCase(nextColor)}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
