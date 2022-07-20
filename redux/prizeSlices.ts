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

export interface Task {
  id: number
  taskName: string
}

export const allTasksSlice = createSlice({
  name: 'allTasks',
  initialState: [] as Task[],
  reducers: {
    getAllTasks: state => {
      state = [
        { id: 1, taskName: "激励视频" },
        { id: 2, taskName: "全屏视频广告" },
        { id: 3, taskName: "信息流" },
        { id: 4, taskName: "横幅广告" },
      ]
      return state
    }
  }
})
export const { getAllTasks } = allTasksSlice.actions
