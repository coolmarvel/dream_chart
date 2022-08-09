import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import boardReducer from "../reducers/boardReducer";

const rootReducer = combineReducers({
  boardReducer,
  loadingReducer,
});

export default rootReducer;
