import { SET_USER, UN_SET_USER } from "../actions/UserActions";

const initialState = {
  user: {
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    roles: [],
  },
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case UN_SET_USER:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
