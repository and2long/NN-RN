import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { loginSlice } from "./slices/loginSlice";
import { allTasksSlice, userPointSlice } from "./slices/prizeSlice";

export const store = configureStore({
  reducer: {
    authState: authSlice.reducer,
    loginState: loginSlice.reducer,
    userPoint: userPointSlice.reducer,
    allTasks: allTasksSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch