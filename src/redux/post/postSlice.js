import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  body: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    changePostData: (state, action) => {
      const { label, value } = action.payload;
      state[label] = value;
    },
    resetPostData: (state) => {
      state.title = "";
      state.body = "";
    },
  },
});

export const { changePostData, resetPostData } = postSlice.actions;
export default postSlice.reducer;
