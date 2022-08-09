import {
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAILURE,
  SEARCH_DATA_ASYNC_SUCCESS,
  SEARCH_DATA_ASYNC_FAILURE,
  SAVE_DATA_ASYNC_SUCCESS,
  SAVE_DATA_ASYNC_FAILURE,
  REMOVE_DATA_ASYNC_SUCCESS,
  REMOVE_DATA_ASYNC_FAILURE,
} from "../actions/boardAction";
import initialState from "../actions/boardAction";

import { handleActions } from "redux-actions";
import produce from "immer";

const boardReducer = handleActions(
  {
    [SEARCH_DATA_ASYNC_SUCCESS]: (state, { payload: data }) =>
      produce(state, (draft) => {
        // console.log(data);
        draft["dashboard"] = data;
        for (let i = 0; i < data.length; i++) {
          if (i === data.length - 1) {
            draft["lastId"] = data[i].id;
          }
        }
      }),
    [SEARCH_DATA_ASYNC_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => {
        draft["dashbaord"] = null;
        alert("error!");
      }),
    [SAVE_DATA_ASYNC_SUCCESS]: (state, { payload: data, lastId }) =>
      produce(state, (draft) => {
        console.log("data", data.data);
        // draft["dashboard"].push({
        //   id: data.data.id,
        //   blocks: data.data.blocks,
        //   transactions: data.data.transactions,
        // });
        console.log("lastId", lastId);
      }),
    [SAVE_DATA_ASYNC_FAILURE]: (state, { payload: data, lastId }) =>
      produce(state, (draft) => {
        alert("error!");
      }),
    [SEARCH_DATA_SUCCESS]: (state, { payload: data }) =>
      produce(state, (draft) => {}),
    [SEARCH_DATA_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => {}),
    [REMOVE_DATA_ASYNC_SUCCESS]: (state, { payload: data }) =>
      produce(state, (draft) => {}),
    [REMOVE_DATA_ASYNC_FAILURE]: (state, { payload: data }) =>
      produce(state, (draft) => {}),
  },
  initialState
);

export default boardReducer;
