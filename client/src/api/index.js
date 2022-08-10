import axios from "axios";

const url = "http://localhost:5000/stories";

export const fetchStories = () => axios.get(url);
export const createStory = (story) => axios.post(url, story);
export const updateStory = (id, story) => axios.patch(`${url}/${id}`, story);
export const deleteStory = (id) => axios.delete(`${url}/${id}`);
export const likeStory = (id) => axios.patch(`${url}/${id}/likeStory`);
export const login = () => axios.get(url);
export const signup = () => axios.get(url);
