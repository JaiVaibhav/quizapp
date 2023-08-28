import React, { useRef, useState } from "react";
import "./CShapeWith7boxes.css";
function CShapeWith7boxes() {
  const [array, setArray] = useState([]);
  function handleClick(e) {
    array.push(e.target.dataset.index);
    setArray([...array]);
    if (array.length === 7) {
      const arr = [...array];
      const id = setInterval(() => {
        console.log(id);
        if (arr.length > 0) {
          arr.shift();
          setArray([...arr]);
        } else {
          clearInterval(id);
        }
      }, 1000);
      //}
    }
  }

  function isSelected(arr, item) {
    const ch = arr.find((ele) => ele === item);
    return ch ? true : false;
  }
  return (
    <div className="container">
      <div className="boxContainer" onClick={handleClick}>
        <div className="boxRow">
          <div
            className={`box ${isSelected(array, "0") ? "boxSelected" : ""}`}
            data-index="0"
          ></div>
          <div
            className={`box  ${isSelected(array, "1") ? "boxSelected" : ""}`}
            data-index="1"
          ></div>
          <div
            className={`box  ${isSelected(array, "2") ? "boxSelected" : ""}`}
            data-index="2"
          ></div>
        </div>
        <div className="boxRow2">
          <div
            className={`box  ${isSelected(array, "3") ? "boxSelected" : ""}`}
            data-index="3"
          ></div>
        </div>
        <div className="boxRow">
          <div
            className={`box  ${isSelected(array, "4") ? "boxSelected" : ""}`}
            data-index="4"
          ></div>
          <div
            className={`box  ${isSelected(array, "5") ? "boxSelected" : ""}`}
            data-index="5"
          ></div>
          <div
            className={`box  ${isSelected(array, "6") ? "boxSelected" : ""}`}
            data-index="6"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CShapeWith7boxes;
