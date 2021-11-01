import { useDispatch } from "react-redux";

import { bindActionCreators } from "redux";
import { AuthActionCreators } from "../pages/LoginPage/actions";

const allActionCreators = {
  ...AuthActionCreators,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
