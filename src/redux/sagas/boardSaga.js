import {
  // SEARCH_DATA,
  SEARCH_DATA_ASYNC,
  SAVE_DATA_ASYNC,
  REMOVE_DATA_ASYNC,
} from "../actions/boardAction";
import createRequestSaga from "./createRequestSaga";
import * as API from "../../api/boardReducerAPI";
import { takeEvery, takeLatest } from "redux-saga/effects";

// Create Saga
const searchDataSaga = createRequestSaga(SEARCH_DATA_ASYNC, API.getData);
const saveDataSaga = createRequestSaga(SAVE_DATA_ASYNC, API.postData);
const removeDataSaga = createRequestSaga(REMOVE_DATA_ASYNC, API.removeData);

// Main Saga
export default function* boardSaga() {
  yield takeLatest(SEARCH_DATA_ASYNC, searchDataSaga);
  yield takeLatest(SAVE_DATA_ASYNC, saveDataSaga);
  yield takeLatest(REMOVE_DATA_ASYNC, removeDataSaga);
}
