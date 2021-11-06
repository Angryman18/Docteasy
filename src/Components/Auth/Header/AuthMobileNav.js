import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../image/logo.svg";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AuthMobileNav = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const ifLoggedIn = useSelector((state) => state.AuthReducer.ifLoggedIn);

  const SignoutHandler = () => {
    if (ifLoggedIn) {
      dispatch({ type: "Signout" });
    }
    toast.info("Signed Out!", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
      autoClose: 3000,
    });
    history.push("/")
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto"></ul>
        <span className="navbar-text">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/dashboard">
                Dashboard <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account">
                Account
              </Link>
            </li>
            <li className="nav-item">
              <button
                type="button"
                style={{ padding: "0.5rem 1rem" }}
                className="nav-link btn btn-warning"
                onClick={SignoutHandler}
              >
                Signout
              </button>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  );
};

export default AuthMobileNav;
