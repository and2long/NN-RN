import { combineReducers, configureStore, PreloadedState } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { loginSlice } from "./slices/loginSlice";
import { allTasksSlice, userPointSlice } from "./slices/prizeSlice";

const rootReducer = combineReducers({
  authState: authSlice.reducer,
  loginState: loginSlice.reducer,
  userPoint: userPointSlice.reducer,
  allTasks: allTasksSlice.reducer,
})
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']