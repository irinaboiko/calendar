import { combineReducers } from "redux";

import authReducer from "../pages/LoginPage/reducers";
import eventReducer from "../pages/EventPage/reducers";

export const rootReducer = combineReducers({
  authReducer,
  eventReducer,
});
