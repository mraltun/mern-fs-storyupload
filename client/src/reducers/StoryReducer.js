const storyReducer = (state = [], action) => {
  if (action.type === "FETCH_ALL_STORIES") {
    return action.payload;
  }

  if (action.type === "CREATE_STORY") {
    return [...state, action.payload];
  }

  return state;
};

export default storyReducer;
