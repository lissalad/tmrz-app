import { createSlice } from "@reduxjs/toolkit";
import Timer from "./Timer";

const initialState = {
  value: [],
};

export const timersSlice = createSlice({
  name: "timers",
  initialState,
  reducers: {
    addTimer: (state, action) => {
      state.value.push(new Timer(action.payload));
    },

    toggleTimer: (state, action) => {
      state.value[action.payload].isRunning =
        !state.value[action.payload].isRunning;
    },
    update: (state, action) => {
      state.value.forEach((timer) => {
        if (timer.isRunning) {
          timer.time += action.payload;
        }
      });
    },

    resetTimer: (state, action) => {
      if (state.value[action.payload].isRunning) {
        state.value[action.payload].isRunning = // just calling toggleTimer didnt work
          !state.value[action.payload].isRunning;
      }
      state.value[action.payload].time = 0;
    },
  },
});

export const { addTimer, toggleTimer, update, resetTimer } =
  timersSlice.actions;

export default timersSlice.reducer;
