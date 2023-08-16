import React from "react";
import { quizDetails } from "../../utils/constants";
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";

function Result() {
  const answerObj = useSelector((state) => state.answerObj);
  const correctAnswer = getCorrectAnswerCount(answerObj, quizDetails);
  console.log(answerObj);

  return (
    <div style={{ margin: "4rem", paddingTop: "20px", paddingBottom: "30px" }}>
      <Link to={"/"} style={{ float: "right" }}>
        Logout
      </Link>
      <h2 style={{ textAlign: "center" }}>Summary</h2>

      <SummaryLine
        text={"Total No. of Questions"}
        value={quizDetails.length}
        color={"blue"}
      />
      <SummaryLine
        text={"Total No. of Attemted Questions"}
        value={Object.keys(answerObj).length}
        color={"orange"}
      />
      <SummaryLine
        text={"Total No. of Correct Answer"}
        value={correctAnswer}
        color={"green"}
      />
      <SummaryLine
        text={"Total No. of Incorrect Answer "}
        value={Object.keys(answerObj).length - correctAnswer}
        color={"red"}
      />

      <hr />

      <h2 style={{ textAlign: "center" }}>View Your Answer</h2>
      {quizDetails.map((ele) => {
        return (
          <div
            key={ele.id}
            style={{
              backgroundColor: ele.id % 2 ? "" : "lightgray",
              borderRadius: "1rem",
              padding: "2rem",
            }}
          >
            <h4>
              Q{ele.id}. {ele.Q}
            </h4>
            {ele.O.map((e, i) => {
              return (
                <Typography
                  key={i}
                  color={getOptionColor(
                    answerObj[ele.id - 1],
                    quizDetails[ele.id - 1].A,
                    i
                  )}
                >
                  {i + 1}. {e}
                </Typography>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function getOptionColor(answer, quizAnswer, currIndx) {
  if (answer === quizAnswer && answer === currIndx) {
    return "green";
  } else if (answer === currIndx) {
    return "red";
  } else if (quizAnswer === currIndx) {
    return "blue";
  }
}

function getCorrectAnswerCount(answerObj, quizDetails) {
  let count = 0;
  Object.keys(answerObj).forEach((ele) => {
    if (answerObj[ele] === quizDetails[ele].A) {
      count++;
    }
  });

  return count;
}

function SummaryLine({ text, value, color }) {
  return (
    <div style={{ display: "flex" }}>
      <Typography>{text} :</Typography>{" "}
      <Typography color={color}>{value}</Typography>
    </div>
  );
}

export default Result;
