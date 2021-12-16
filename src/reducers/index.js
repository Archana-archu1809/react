import * as type from "../types";
const initialState = {
  users: [],
  loading: false,
  error: null,
};
export default function Index(state = initialState, action) {
  switch (action.type) {
    case type.ADD_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.ADD_USERS_SUCCESS:
      return {
        ...state,

        users: action.users,
        loading: false,
      };
    case type.ADD_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
