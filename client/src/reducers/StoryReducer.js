const storyReducer = (state = [], action) => {
  if (action.type === "FETCH_ALL_STORIES") {
    return action.payload;
  }

  if (action.type === "CREATE_STORY") {
    return [...state, action.payload];
  }

  if (action.type === "UPDATE_STORY") {
    return state.map((story) =>
      story._id === action.payload ? action.payload : story
    );
  }

  if (action.type === "DELETE_STORY") {
    return state.filter((story) => story._id !== action.payload);
  }

  return state;
};

export default storyReducer;
