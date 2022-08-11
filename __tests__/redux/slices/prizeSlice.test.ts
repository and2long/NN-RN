import { getUserPoint } from '../../../src/redux/slices/prizeSlice';
import { setupStore } from '../../../src/redux/store';

test(`get user point`, () => {
  let store = setupStore()
  store.dispatch(getUserPoint())
  let state = store.getState().userPoint;
  expect(state.value).toBe(10)
})