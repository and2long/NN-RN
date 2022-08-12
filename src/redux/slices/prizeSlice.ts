import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sleep } from "../utils";

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

export interface Task {
  id: number
  taskName: string
}

interface AllTasksState {
  status: 'idle' | 'loading' | 'failed';
  items: Task[]
}

const initialState: AllTasksState = {
  status: 'idle',
  items: [],
};

export const allTasksSlice = createSlice({
  name: 'allTasks',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload
      })
      .addCase(getAllTasks.rejected, (state) => {
        state.status = 'failed';
      });
  }
})

export const getAllTasks = createAsyncThunk('prize/getAllTasks', async () => {
  await sleep(1000)
  const names = [
    "开屏广告",
    "激励视频广告",
    "全屏视频广告",
    "自渲染贴片广告",
    "自渲染信息流",
    "自渲染插屏"]
  return names.map((item, index) => ({ id: index, taskName: item }))
})