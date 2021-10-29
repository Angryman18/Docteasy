const defaultValue = {
  LoggedIn: false,
  user: {},
  pending: true,
  ifUser: localStorage.getItem('user') || null
};

const AuthReducer = (state = defaultValue, actions) => {
  switch (actions.type) {
    case "loggedIn":
      return { user: actions.user, LoggedIn: actions.LoggedIn };
    case "pending":
        return {...state, pending: false}
    case "setCookie":
        localStorage.setItem('user', actions.user);
        return state;
    default:
      return state;
  }
};

export default AuthReducer;
