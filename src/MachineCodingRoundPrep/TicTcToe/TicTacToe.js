import React, { useEffect, useRef, useState } from "react";
import styles from "./TicTacToe.module.css";
function TicTacToe() {
  const [gameState, setGameState] = useState([[], [], []]);
  const user = useRef(0);

  function handleBlockClick(e) {
    let [x, y] = [
      Number(e.target.dataset.indexx),
      Number(e.target.dataset.indexy),
    ];
    if (gameState[x][y] == undefined) {
      gameState[x][y] = user.current ? "X" : "O";
      user.current = user.current ? 0 : 1;
      setGameState([...gameState]);
    }
  }

  function checkWinner(arr) {
    for (let i = 0; i < arr.length; i++) {
      let j = 0;
      let ch = arr[i][j];
      let count = 0;
      for (; j < arr.length; j++) {
        if (ch && arr[i][j] === ch) {
          count++;
        }
      }
      if (count === 3) {
        return true;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      let j = 0;
      let ch = arr[j][i];
      let count = 0;
      for (; j < arr.length; j++) {
        if (ch && arr[j][i] === ch) {
          count++;
        }
      }
      if (count === 3) {
        return true;
      }
    }

    {
      let i = 0;
      let j = 0;
      let ch = arr[i][j];
      let count = 0;

      for (; j < arr.length; j++, i++) {
        if (ch && arr[i][j] === ch) {
          count++;
        }
      }

      if (count === 3) {
        return true;
      }
    }

    {
      let i = 0;
      let j = 2;
      let ch = arr[i][j];
      let count = 0;
      for (; j >= 0; j--, i++) {
        if (ch && arr[i][j] === ch) {
          count++;
        }
      }
      if (count === 3) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    if (checkWinner(gameState)) {
      setTimeout(() => {
        alert(
          user.current
            ? "First Player is the Winner"
            : "Second Player is the Winner"
        );
        setGameState([[], [], []]);
        user.current = 0;
      }, 1);
    }
  }, [gameState]);

  return (
    <div className={styles.container}>
      <h1>TicTacToe Game</h1>
      <div className={styles.Tcontainer} onClick={handleBlockClick}>
        <div className={styles.row}>
          <div className={styles.block} data-indexx="0" data-indexy="0">
            {gameState[0][0]}
          </div>
          <div className={styles.block} data-indexx="0" data-indexy="1">
            {gameState[0][1]}
          </div>
          <div className={styles.block} data-indexx="0" data-indexy="2">
            {gameState[0][2]}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.block} data-indexx="1" data-indexy="0">
            {gameState[1][0]}
          </div>
          <div className={styles.block} data-indexx="1" data-indexy="1">
            {gameState[1][1]}
          </div>
          <div className={styles.block} data-indexx="1" data-indexy="2">
            {gameState[1][2]}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.block} data-indexx="2" data-indexy="0">
            {gameState[2][0]}
          </div>
          <div className={styles.block} data-indexx="2" data-indexy="1">
            {gameState[2][1]}
          </div>
          <div className={styles.block} data-indexx="2" data-indexy="2">
            {gameState[2][2]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
