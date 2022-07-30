import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authState",
  initialState: { loading: true, isAuth: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAuthState.fulfilled, (state, action) => {
        state.loading = false
        state.isAuth = action.payload !== null
      })
      .addCase(clearAuthState.fulfilled, (state, action) => {
        state.isAuth = false
      });
  }
})

export const getAuthState = createAsyncThunk('auth/getAuthState', async () => {
  return await AsyncStorage.getItem("@token")
})

export const clearAuthState = createAsyncThunk('auth/clearAuthState', async () => {
  return await AsyncStorage.removeItem("@token")
})
