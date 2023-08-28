import React, { useState } from "react";
import styles from "./BishopOnChessBoard.module.css";
function BishopOnChessBoard() {
  const [pos, setPos] = useState([]);
  const posObj = (function () {
    if (pos.length === 0) {
      return {};
    }
    const obj = {};
    const [x, y] = pos;
    let i = x;
    let j = y;

    // while (i >= 0) {
    //   if (obj[i]) {
    //     obj[i][j] = true;
    //   } else {
    //     obj[i] = {};
    //     obj[i][j] = true;
    //   }
    //   i--;
    // }

    // i = x;
    // j = y;
    // while (i < 8) {
    //   if (obj[i]) {
    //     obj[i][j] = true;
    //   } else {
    //     obj[i] = {};
    //     obj[i][j] = true;
    //   }
    //   i++;
    // }

    // i = x;
    // j = y;
    // while (j >= 0) {
    //   if (obj[i]) {
    //     obj[i][j] = true;
    //   } else {
    //     obj[i] = {};
    //     obj[i][j] = true;
    //   }
    //   j--;
    // }

    // i = x;
    // j = y;
    // while (j < 8) {
    //   if (obj[i]) {
    //     obj[i][j] = true;
    //   } else {
    //     obj[i] = {};
    //     obj[i][j] = true;
    //   }
    //   j++;
    // }

    i = x;
    j = y;
    while (i >= 0 && j >= 0) {
      if (obj[i]) {
        obj[i][j] = true;
      } else {
        obj[i] = {};
        obj[i][j] = true;
      }

      i--;
      j--;
    }

    i = x;
    j = y;
    while (i < 8 && j < 8) {
      if (obj[i]) {
        obj[i][j] = true;
      } else {
        obj[i] = {};
        obj[i][j] = true;
      }

      i++;
      j++;
    }

    i = x;
    j = y;
    while (i < 8 && j >= 0) {
      if (obj[i]) {
        obj[i][j] = true;
      } else {
        obj[i] = {};
        obj[i][j] = true;
      }

      i++;
      j--;
    }

    i = x;
    j = y;
    while (i >= 0 && j < 8) {
      if (obj[i]) {
        obj[i][j] = true;
      } else {
        obj[i] = {};
        obj[i][j] = true;
      }

      i--;
      j++;
    }
    return obj;
  })();
  return (
    <div className={styles.container}>
      <div className={styles.chessBoard}>
        {[0, 0, 0, 0, 0, 0, 0, 0].map((ele, i) => {
          return (
            <div className={styles.chessRow}>
              {[0, 0, 0, 0, 0, 0, 0, 0].map((ele, j) => {
                const checkPosforQueen = posObj[i]?.[j];

                const cellCSS = checkPosforQueen
                  ? styles.Bblue
                  : (i + j) % 2 === 0
                  ? styles.Bwhite
                  : styles.Bblack;
                return (
                  <div
                    className={`${styles.block} ${cellCSS}`}
                    data-indexi={i}
                    data-indexj={j}
                    onMouseEnter={(e) =>
                      setPos([e.target.dataset.indexi, e.target.dataset.indexj])
                    }
                    onMouseLeave={() => setPos([])}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BishopOnChessBoard;
