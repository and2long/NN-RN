import { createSlice } from "@reduxjs/toolkit";

export const userPointSlice = createSlice({
  name: 'userPoint',
  initialState: { value: 0 },
  reducers: {
    getUserPoint: state => {
      state.value = 10
    }
  }
})

export const { getUserPoint } = userPointSlice.actions
export default userPointSlice.reducer