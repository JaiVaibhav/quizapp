import { Button } from "@mui/material";
import react from "react";

export function OptionButtons({
  option,
  handleOnClick,
  optionid,
  questionNo,
  selected,
}) {
  return (
    <div>
      <Button
        color={selected === optionid ? "secondary" : "primary"}
        onClick={() => handleOnClick({ [questionNo]: optionid })}
        style={{ textTransform: "none" }}
      >
        {optionid + 1}
        {". "}
        {option}
      </Button>
    </div>
  );
}
