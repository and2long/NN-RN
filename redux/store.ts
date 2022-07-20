import { configureStore } from "@reduxjs/toolkit";
import { allTasksSlice, userPointSlice } from "./prizeSlices";

export const store = configureStore({
  reducer: {
    userPoint: userPointSlice.reducer,
    allTasks: allTasksSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch