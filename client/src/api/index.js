import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    const profile = JSON.parse(localStorage.getItem("profile"));
    req.headers.Authorization = `Bearer ${profile.token}`;
  }

  return req;
});

export const fetchStories = () => api.get("/stories");
export const createStory = (story) => api.post("/stories", story);
export const updateStory = (id, story) => api.patch(`/stories/${id}`, story);
export const deleteStory = (id) => api.delete(`/stories/${id}`);
export const likeStory = (id) => api.patch(`/stories/${id}/likeStory`);

export const login = async (formValues) => api.post("/user/login", formValues);
export const signup = async (formValues) =>
  api.post("/user/signup", formValues);
