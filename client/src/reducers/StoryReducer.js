import { combineReducers } from "redux";

const storyReducer = (state, action) => {
  if (action.type === "CREATE_STORY") {
    return { ...state };
  }

  return state;
};

combineReducers({ storyReducer });

export default storyReducer;
