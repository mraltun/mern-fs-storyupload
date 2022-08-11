import { combineReducers } from "redux";

import stories from "./StoryReducer";
import authentication from "./AuthReducer";

export default combineReducers({
  stories,
  authentication,
});
