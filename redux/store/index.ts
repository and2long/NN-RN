import { combineReducers, createStore, Store } from "redux";
import { AppState } from "../data";
import userPointReducer from "../reducer";


const rootReducer = combineReducers<AppState>({
  userPoint: userPointReducer,
});

function configureStore(): Store<AppState> {
  const store = createStore(rootReducer, undefined);
  return store;
}

const storeData = configureStore();

export default storeData;
