const defaulValue = {
  Visible: false,
  message: null,
  timer: 4000,
  color: "#212121",
};

const NotificationReducer = (state = defaulValue, actions) => {
  switch (actions.type) {
    case "visible":
      switch (actions.color) {
        case "SUCCESS":
          return {
            Visible: true,
            message: actions.message,
            timer: actions.timer,
            color: "rgba(134,170,64,1)",
          };
        case "ERROR":
          return {
            Visible: true,
            message: actions.message,
            timer: actions.timer,
            color: "rgba(255,46,99,1)",
          };
        case "INFO":
            return {
                Visible: true,
                message: actions.message,
                timer: actions.timer,
                color: "rgba(0,114,187,1)",
              };
        default:
          return {
            Visible: true,
            message: actions.message,
            timer: actions.timer,
            color: "#212121",
          };
      }
    case "visibleOff":
      return { Visible: false };
    default:
      return state;
  }
};

export default NotificationReducer;
