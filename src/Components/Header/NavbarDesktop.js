import styled from "styled-components";
import logo from "../../image/logo.svg";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
// import Form from "../Auth/Login/Form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LoggedInUser from "./AuthUser/LoggedInUser";

const DesktopNavbar = ({ Home, About, Faq, Reviews, Login, Signup }) => {
  const ScrollLink = Scroll.Link;

  const dispatch = useDispatch();
  const ifUser = useSelector((state) => state.AuthReducer.ifUser);

  const loginHandler = (e) => {
    e.preventDefault();
    return dispatch({ type: "login" });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    return dispatch({ type: "signup" });
  };

  return (
    <Nav>
      <div className="navbar-main">
        <div className="logo">
          <Link to={Home.link}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <i className="fas fa-bars"></i>
          <ul>
            <li>
              <Link to={Home.link}>{Home.text}</Link>
            </li>
            <li>
              <Link to={About.link}>{About.text}</Link>
            </li>
            <li>
              <ScrollLink to={Faq.text} smooth={true}>
                {Faq.text}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to={Reviews.text} smooth={true}>
                {Reviews.text}
              </ScrollLink>
            </li>
          </ul>
        </div>
        {!ifUser && (
          <div className="icons">
            <ul>
              <button onClick={loginHandler}>{Login.text}</button>
              <button
                onClick={signupHandler}
                style={{ backgroundColor: "#212121" }}
              >
                {Signup.text}
              </button>
            </ul>
          </div>
        )}
        {ifUser && <LoggedInUser />}
      </div>
    </Nav>
  );
};

export default DesktopNavbar;

const Nav = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Signika+Negative:wght@600&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap");
  box-shadow: 1px 1px 15px 1px rgba(0,0,0,0.1);
  .navbar-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1rem;
    background-color: transparent;
  }
  .logo {
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .links ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 10px 0;
  }
  .links i {
    display: none;
  }
  .links ul li {
    list-style: none;
    padding: 0.5rem;
    position: relative;
    margin: 0 0.5rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
  }

  .links ul li::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 3px;
    width: 0%;
    background-color: #5f5fc4;
    transition: 0.2s ease;
  }

  .links ul li:hover::after {
    left: 0;
    width: 100%;
  }

  .links ul li a {
    text-decoration: none;
    color: #5f5fc4;
    cursor: pointer;
  }

  .links ul li a:hover {
    color: #5f5fc4;
  }

  .icons ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    margin: 10px 0;
    width: 100%;
  }

  .icons ul button {
    margin-left: 5px;
    outline: none;
    border: none;
    background-color: #2962ff;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-weight: bold;
    transition: 0.3s ease;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
  }

  .icons ul button:hover {
    background-color: #212121;
  }
`;
