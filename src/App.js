import { useState } from "react";
import "./index.css";
import { TicTacToe } from "./TicTacToe";
export default function App() {
  const [size, setSize] = useState(3);
  const [sizeChanged, setSizeChnaged] = useState(false);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10); // parse first
    setSizeChnaged(true);
    if (isNaN(value) || value < 3 || value > 10) {
      setSize(3);
      return;
    }

    setSize(value);
  };
  return (
    <div className="App">
      <style>
        {`
      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type=number] {
        -moz-appearance: textfield;
      }
    `}
      </style>
      <h1>Tic Tac Toe </h1>
      <h3>By Akash</h3>

      <label>Enter Board Size (Min 3, Max 10) - </label>
      <input
        type="number"
        min={3}
        max={10}
        onChange={handleChange}
        style={{
          width: "70px",
          height: "20px",
          border: "2px solid grey",
          borderRadius: "50px",
          MozAppearance: "textfield",
          WebkitAppearance: "none",
          appearance: "none",
          textAlign: "center",
          fontSize: "15px",
        }}
      />
      <TicTacToe
        size={size}
        setSizeChnaged={setSizeChnaged}
        sizeChanged={sizeChanged}
      />
    </div>
  );
}
