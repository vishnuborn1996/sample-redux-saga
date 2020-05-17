import { userActionType } from "../actions/userActionType";

const initialState = { isLoading: true, user: null };

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActionType.SET_USER:
      debugger;
      return {
        isLoading: false,
        user: action.payload.user,
      };
    case userActionType.CLEAR_USER:
      debugger;
      return {
        ...initialState,
        isLoading: false,
      };
    default:
      return state;
  }
}
