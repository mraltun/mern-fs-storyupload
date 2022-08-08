import { combineReducers } from "redux";

const storyReducer = (state, action) => {
  if (action.type === "FETCH_ALL_STORIES") {
    return action.payload;
  }

  return state;
};

combineReducers({ storyReducer });

export default storyReducer;
