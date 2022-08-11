import { AUTHENTICATION, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  if (action.type === AUTHENTICATION) {
    localStorage.setItem("profile", JSON.stringify({ ...action.data }));

    return { ...state, authData: action?.data };
  }

  if (action.type === LOGOUT) {
    localStorage.clear();
    return { ...state, authData: null };
  }

  return state;
};

export default authReducer;
