import Model from "./Model"
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch()
    const handler = () => {
        return dispatch({type: "signup"})
    }
    return (
        <Model>
            <LoginForm createAccount={handler} />
        </Model>
    )
}

export default Login;