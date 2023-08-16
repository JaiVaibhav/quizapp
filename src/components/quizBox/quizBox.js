import React, { useState } from "react";
import QuestionBox from "../questionBox/questionBox";
import { OptionButtons } from "../option/optionButtons";
import { quizDetails } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { updateAnswer } from "../../store/slice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./quizBox.css";
import SubmitPrompt from "../submitPrompt/submitPrompt";
function QuizBox() {
  const [currQNo, setCurrQNo] = useState(0);
  const answerObj = useSelector((state) => state.answerObj);
  const store = useSelector((state) => state);

  //console.log(store);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function submitQuiz() {
    navigate("/result");
  }
  function getNextQuestion() {
    setCurrQNo((currQNo) =>
      currQNo === quizDetails.length - 1 ? currQNo : currQNo + 1
    );
  }

  function selectOption(obj) {
    dispatch(updateAnswer(obj));
    getNextQuestion();
  }

  function getPrevQuestion() {
    setCurrQNo((currQNo) => (currQNo === 0 ? 0 : currQNo - 1));
  }
  return (
    <div className="quizBox">
      <div className="subHeader">
        <h3>
          {currQNo + 1}/{quizDetails.length}
        </h3>
      </div>
      <div>
        <div>
          <QuestionBox question={quizDetails[currQNo].Q} />
        </div>
        <div>
          {quizDetails[currQNo]?.O.map((ele, i) => {
            return (
              <OptionButtons
                key={i}
                option={ele}
                handleOnClick={selectOption}
                optionid={i}
                questionNo={currQNo}
                selected={answerObj[currQNo] ?? null}
              />
            );
          })}
        </div>
      </div>
      <div className="nagivationDiv">
        {currQNo ? (
          <Button variant="contained" onClick={getPrevQuestion}>
            Go Back
          </Button>
        ) : (
          ""
        )}
        {currQNo < quizDetails.length - 1 ? (
          <Button variant="contained" onClick={getNextQuestion}>
            {answerObj[currQNo] ? "Next" : "Skip"}
          </Button>
        ) : (
          <SubmitPrompt />
        )}
      </div>
    </div>
  );
}

export default QuizBox;
