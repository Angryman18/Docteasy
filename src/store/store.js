import { createStore } from "redux";
import AuthReducer from "./authStore";
import {combineReducers} from 'redux';
import NotificationReducer from "./notification";

const defaultValue = {
  Login: false,
  Signup: false,
  Visible: false,
};

const GlobalReducer = (state = defaultValue, actions) => {
  switch (actions.type) {
    case "login":
      return { Signup: false, Login: true };
    case "signup":
      return { Login: false, Signup: true };
    case "reset":
      return { Login: false, Signup: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({AuthReducer, GlobalReducer, NotificationReducer})

export const AppStore = createStore(rootReducer);
