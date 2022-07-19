import { configureStore } from "@reduxjs/toolkit";
import userPointSlice from "./prizeSlices";

export const store = configureStore({
  reducer: {
    userPoint: userPointSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch