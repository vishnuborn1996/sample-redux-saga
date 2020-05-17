import { userActionType } from "./userActionType";

export const login = (payload) => {
  return { type: userActionType.LOGIN_REQUEST, payload };
};

export const setUser = (user) => {
  return {
    type: userActionType.SET_USER,
    payload: {
      user: user,
    },
  };
};

export const clearUser = () => {
  debugger;
  return {
    type: userActionType.CLEAR_USER,
  };
};
