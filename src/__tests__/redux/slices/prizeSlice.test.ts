import { getUserPoint } from '../../../redux/slices/prizeSlice';
import { setupStore } from '../../../redux/store';

test(`get user point`, () => {
  let store = setupStore()
  store.dispatch(getUserPoint())
  let state = store.getState().userPoint;
  expect(state.value).toBe(10)
})