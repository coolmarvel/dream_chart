import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../sagas/createRequestSaga";

// ACTION TYPES
export const [SEARCH_DATA, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAILURE] =
  createRequestActionTypes("SEARCH_DATA");

export const [
  SEARCH_DATA_ASYNC,
  SEARCH_DATA_ASYNC_SUCCESS,
  SEARCH_DATA_ASYNC_FAILURE,
] = createRequestActionTypes("SEARCH_DATA_ASYNC");

export const [
  SAVE_DATA_ASYNC,
  SAVE_DATA_ASYNC_SUCCESS,
  SAVE_DATA_ASYNC_FAILURE,
] = createRequestActionTypes("SAVE_DATA_ASYNC");

export const [
  REMOVE_DATA_ASYNC,
  REMOVE_DATA_ASYNC_SUCCESS,
  REMOVE_DATA_ASYNC_FAILURE,
] = createRequestActionTypes("REMOVE_DATA_ASYNC");

// ACTION CREATOR
export const searchData = createAction(SEARCH_DATA);
export const searchDataAsync = createAction(SEARCH_DATA_ASYNC, (data) => data);
export const saveDataAsync = createAction(SAVE_DATA_ASYNC, (data, lastId) => ({
  data,
  lastId,
}));
export const removeDataAsync = createAction(REMOVE_DATA_ASYNC);

const initialState = {
  dashboard: [],
  lastId: 0,
};

export default initialState;
