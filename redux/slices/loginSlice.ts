import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sleep } from "../utils";


interface LoginState {
  status: 'idle' | 'loading' | 'failed';
  data: {
    id: string,
    token: string
  } | null
}
const initialState: LoginState = {
  status: 'idle',
  data: null,
};

export const loginSlice = createSlice({
  name: "loginState",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload
      })
      .addCase(login.rejected, (state) => {
        state.status = 'failed';
      });
  }
})

export const login = createAsyncThunk('auth/login', async () => {
  await sleep(1000)
  return { id: "123", token: "login_token" }
})
