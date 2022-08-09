import * as api from "../api";

export const getStories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStories();
    const action = { type: "FETCH_ALL_STORIES", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createStory = (story) => async (dispatch) => {
  try {
    const { data } = await api.createStory(story);
    dispatch({ type: "CREATE_STORY", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStory = (id, story) => async (dispatch) => {
  try {
    const { data } = await api.updateStory(id, story);
    dispatch({ type: "UPDATE_STORY", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteStory = (id, story) => async (dispatch) => {
  try {
    await api.deleteStory(id);
    dispatch({ type: "DELETE_STORY", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
