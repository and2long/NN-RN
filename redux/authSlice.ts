import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authState",
  initialState: { value: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAuthState.fulfilled, (state, action) => {
        state.value = action.payload !== null
      });
  }
})

export const getAuthState = createAsyncThunk('auth/getAuthState', async () => {
  return await AsyncStorage.getItem("@token")
})
