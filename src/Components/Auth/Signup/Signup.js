import Model from "../Login/Model";
import SignupForm from "./SignupForm";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const handler = () => {
    return dispatch({ type: "login" });
  };

  return (
    <Model>
      <SignupForm alreadyHaveAccount={handler} />
    </Model>
  );
};

export default Signup;
