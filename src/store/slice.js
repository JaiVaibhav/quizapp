import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    answerObj: {},
  },
  reducers: {
    updateAnswer: (state, action) => {
      state.answerObj = { ...state.answerObj, ...action.payload };
    },
  },
});

export const { updateAnswer } = quizSlice.actions;
export default quizSlice.reducer;
