import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE } from "../consts";
import { combineReducers } from "redux";

const usersReducer = (
  state = { users: [], error: false, loading: false },
  action
) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, loading: true, error: false };
    case GET_USERS_SUCCESS:
      debugger;
      return { ...state, users: action.payload, loading: false, error: false };
    case GET_USERS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
