import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { quizDetails } from "../../utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export default function SubmitPrompt() {
  const answerObj = useSelector((state) => state.quiz.answerObj);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function handleSubmit() {
    navigate("/result");
  }
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Submit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Do you want to submit?</h2>
          {quizDetails.length - Object.keys(answerObj).length ? (
            <p id="parent-modal-description">
              Number of unattempted questions :
              {quizDetails.length - Object.keys(answerObj).length}
            </p>
          ) : (
            ""
          )}
          <Button onClick={handleSubmit}>Yes</Button>
          <Button onClick={handleClose}>No</Button>
        </Box>
      </Modal>
    </div>
  );
}
