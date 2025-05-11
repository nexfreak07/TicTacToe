import { useState } from "react";
import { useTicTacToe } from "./useTicTacToe";
export const TicTacToe = ({ size, setSizeChnaged, sizeChanged }) => {
  const [bumping, setBumping] = useState(Array(9).fill(false));
  const { board, getStatusMessage, handleClick, resetGame, resetBump } =
    useTicTacToe(size, setSizeChnaged, sizeChanged);

  const handleBumping = (index) => {
    const updatedBump = [...bumping];
    updatedBump[index] = true;
    setBumping(updatedBump);
    setTimeout(() => {
      updatedBump[index] = false;
      setBumping([...updatedBump]);
    }, 300);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <h4>{getStatusMessage()}</h4>
        <button
          onClick={resetGame}
          style={{
            height: "40px",
            background: "#ECEFCA",
            border: "2px solid #CAE0BC",
            borderRadius: "10px",
            cursor: "pointer",
            transform: resetBump ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.2s ease-in",
            fontSize: "15px",
          }}
        >
          {sizeChanged ? "Set Board Size" : "Reset Game"}
        </button>
      </div>
      <div
        style={{
          width: `${size * 100}px`,
          height: "100px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${size}, 1fr)`,
            gap: "15px",
          }}
        >
          {board.map((item, index) => (
            <button
              disable={board[index] !== null}
              onClick={() => {
                handleClick(index);
                handleBumping(index);
              }}
              style={{
                height: "100px",
                cursor: "pointer",
                border: "2px solid #547792",
                background: board[index] !== null ? "#94B4C1" : "#B3C8CF",
                borderRadius: "20px",
                fontSize: "30px",
                color: "#213448",
                transform: bumping[index] ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.2s ease-in",
              }}
            >
              {board[index]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
