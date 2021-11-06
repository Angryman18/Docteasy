import Cookies from "js-cookie";

const defaultValue = {
  token: Cookies.get("token") || null,
  get ifLoggedIn() {
    return Boolean(this.token);
  },
};

const AuthReducer = (state = defaultValue, actions) => {
  switch (actions.type) {
    case "Signout":
      Cookies.remove("token");
      return {
        token: null,
        get ifLoggedIn() {
          return Boolean(this.token);
        },
      };
    case "userLogin":
      Cookies.set("token", actions.token);
      return {
        token: actions.token,
        get ifLoggedIn() {
          return Boolean(this.token);
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
