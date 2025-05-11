import { useState } from "react";
export const useTicTacToe = (size, setSizeChnaged) => {
  const initializeBoard = (size) => Array(size * size).fill(null);
  const [board, setBoard] = useState(initializeBoard(size));
  const [isX, setIsX] = useState(true);
  const [resetBump, setResetBump] = useState(false);

  console.log(size);

  const generatePattern = (size) => {
    let patterns = [];

    for (let row = 0; row < size; row++) {
      let pattern = [];
      for (let col = 0; col < size; col++) {
        pattern.push(row * size + col);
      }
      patterns.push(pattern);
    }

    for (let col = 0; col < size; col++) {
      let pattern = [];
      for (let row = 0; row < size; row++) {
        pattern.push(row * size + col);
      }
      patterns.push(pattern);
    }

    let patternDiag1 = [];

    for (let i = 0; i < size; i++) {
      patternDiag1.push(i * size + i);
    }
    patterns.push(patternDiag1);

    let patternDiag2 = [];
    for (let i = 0; i < size; i++) {
      patternDiag2.push(i * size + (size - i - 1));
    }

    return patterns;
  };

  const WINNING_PATTERNS = generatePattern(size);

  const calculateWinner = (board) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, ...rest] = WINNING_PATTERNS[i];
      if (
        board[a] &&
        WINNING_PATTERNS[i].every((item) => board[item] === board[a])
      ) {
        return board[a];
      }
    }
    return null;
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) {
      return `Player ${isX ? "O" : "X"} is Winner`;
    }
    if (board.every((index) => index !== null)) {
      return "It's a draw";
    }

    return `Player ${isX ? "X" : "O"} Turn`;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const updatedBoard = [...board];
    updatedBoard[index] = isX ? "X" : "O";
    setBoard(updatedBoard);
    setIsX((prev) => !prev);
  };

  const resetGame = () => {
    setResetBump(true);
    setBoard(initializeBoard(size));
    setIsX(true);
    setSizeChnaged(false);
    setTimeout(() => {
      setResetBump(false);
    }, 300);
  };

  return { board, getStatusMessage, handleClick, resetGame, resetBump };
};
