import { combineReducers } from "redux";

import authReducer from "../pages/LoginPage/reducers";

export const rootReducer = combineReducers({
  authReducer,
});
