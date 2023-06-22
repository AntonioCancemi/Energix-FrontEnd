export const SET_USER = "SET_USER";
export const UN_SET_USER = "UN_SET_USER";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
export const unSetUser = (user) => {
  return {
    type: UN_SET_USER,
    paylod: user,
  };
};
