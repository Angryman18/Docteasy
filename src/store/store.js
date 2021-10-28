import { createStore } from "redux";

const defaultValue = {
  Login: false,
  Signup: false,
};

const reducer = (state = defaultValue, actions) => {
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

export const AppStore = createStore(reducer);
