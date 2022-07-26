import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { allTasksSlice, userPointSlice } from "./prizeSlice";

export const store = configureStore({
  reducer: {
    authState: authSlice.reducer,
    userPoint: userPointSlice.reducer,
    allTasks: allTasksSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch