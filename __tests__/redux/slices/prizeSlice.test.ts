import { getAllTasks, getUserPoint } from '../../../src/redux/slices/prizeSlice';
import { setupStore } from '../../../src/redux/store';

describe(`prize test`, () => {
  let store = setupStore()

  test(`get user point`, () => {
    store.dispatch(getUserPoint())
    let state = store.getState().userPoint;
    expect(state.value).toBe(10)
  })

  test(`get all tasks`, async () => {
    await store.dispatch(getAllTasks())
    let state = store.getState().allTasks;
    expect(state.status).toBe('idle')
    expect(state.items.length).toBeGreaterThan(0)
  })
})
