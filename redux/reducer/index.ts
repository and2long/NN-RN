import actionTypes from "../action";
import { Actions, UserPoint } from "../data";

const initialState: UserPoint = {
  userId: 0,
  point: 0
};


export default function userPointReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case actionTypes.FIND_USER_POINT:
      state.point = 10
      state.userId = 10
      break
    default:
      break;
  }
  return state;
}