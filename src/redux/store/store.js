import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducers/UserReducer";
import ClientiReducer from "../reducers/ClientiReducer";

const bigReducer = combineReducers({
  user: UserReducer,
  clienti: ClientiReducer,
});

const store = configureStore({
  reducer: bigReducer,
});
export default store;
