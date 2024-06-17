import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../constant/Constant";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        status: "loading",
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        status: "failed",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
