import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
      .addCase(fetchAllTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllTasks.fulfilled, (state, action) => {
        state.status = 'idle';
        const items = []
        const data = action.payload["retData"]
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          const item = { id: element.id, taskName: element.taskName }
          items.push(item)
        }
        state.items = items
      })
      .addCase(fetchAllTasks.rejected, (state) => {
        state.status = 'failed';
      });
  }
})

export const fetchAllTasks = createAsyncThunk('prize/getAllTasks', async () => {
  const response = await fetch(`http://test1-opapi.nn.com/nn-assist/taskPoints/findAllTask`, {
    method: "POST",
    headers: {
      "appId": "nnMobileIm_6z0g3ut7",
      "reqChannel": "2",
      "token": "nnMobileIm_6z0g3ut75a82e3aa717242b5a1b7a24e87387e31",
    }
  })
  return response.json()
})