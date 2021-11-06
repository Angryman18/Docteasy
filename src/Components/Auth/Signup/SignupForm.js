import styled from "styled-components";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import axios from "axios";

const SignupForm = ({ alreadyHaveAccount }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);

  const [credential, setCredential] = React.useState({
    username: "",
    password: "",
    confPassword: "",
    email: "",
  });

  const emailHandler = (e) => {
    setCredential((pre) => {
      return { ...pre, email: e.target.value };
    });
  };

  const usernameHandler = (e) => {
    setCredential((pre) => {
      return { ...pre, username: e.target.value };
    });
  };

  const passwordHandler = (e) => {
    setCredential((pre) => {
      return { ...pre, password: e.target.value };
    });
  };

  const confPasswordHandler = (e) => {
    setCredential((pre) => {
      return { ...pre, confPassword: e.target.value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { username, email, password, confPassword } = credential;

    if (!username.match(/^([a-zA-Z0-9]+)$/g)) {
      toast.error("Username contains only Letters & Numbers", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000,
        theme: "colored",
      });
      return false;
    }

    if (
      !email.match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ) {
      toast.error("Invalid Email Address", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        theme: "colored",
      });
      return false;
    }
    if (password !== confPassword) {
      toast.error("Password Doesn't Match!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        theme: "colored",
      });
      return false;
    }

    if (password.length < 6) {
      toast.error("Weak Password! Min 6 Char", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        theme: "colored",
      });
      return false;
    }

    const obj = {
      username,
      password,
      email,
    };

    setLoading(true);
    try {
      const req = await axios.post(
        `${process.env.REACT_APP_URL}/auth/local/register`,
        obj
      );

      console.log(req)

      if (req.status !== 200) {
        toast.error("Failed to Signup", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          theme: "colored",
        });
        setLoading(false);
        return false;
      }

      setLoading(false);
      toast.success("Signed Up Successfully. Login Now.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        theme: "colored",
      });
      dispatch({ type: "login" });
    } catch (err) {
      toast.error("Username or Email already Taken", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        theme: "colored",
      });
      setLoading(false);
      return false;
    }
  };

  return (
    <MainLoginForm>
      <div className="form">
        <div className="form-header">
          <h3>Sign Up</h3>
        </div>
        <form onSubmit={submitHandler} className="login-form">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              required
              type="text"
              id="username"
              placeholder="Enter Username"
              onChange={usernameHandler}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              required
              type="text"
              id="email"
              placeholder="Enter Email"
              onChange={emailHandler}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              required
              type="password"
              id="password"
              placeholder="Enter Password"
              onChange={passwordHandler}
            />
          </div>
          <div>
            <label htmlFor="repassword">Re-Password:</label>
            <input
              required
              type="password"
              id="repassword"
              placeholder="Re-Enter Password"
              onChange={confPasswordHandler}
            />
          </div>
          <button disabled={loading} type="submit">
            {loading && (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="false"
                ></span>{" "}
              </>
            )}
            Sign Up
          </button>
        </form>
        <div className="links">
          Already Have an Account<p onClick={alreadyHaveAccount}>Login Now?</p>
        </div>
      </div>
    </MainLoginForm>
  );
};

export default SignupForm;

const MainLoginForm = styled.div`
  box-sizing: border-box;
  background: linear-gradient(
    to bottom,
    rgba(106, 190, 131, 0.5),
    rgba(242, 244, 246, 1)
  );
  border-radius: 10px;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-header h3 {
    padding: 0.5rem 0;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-form > div {
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
  }

  .login-form div > * {
    margin: 0 5px;
  }

  .login-form div label {
    margin: auto 0;
    font-weight: bold;
    flex: 1;
  }
  .login-form div input {
    flex: 1;
  }
  input {
    outline: none;
    border: none;
    border-bottom: 2px solid #040;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
    position: relative;
    border-radius: 5px;
    padding: 5px;
  }

  .login-form button {
    padding: 0.5rem 0;
    font-weight: bold;
    width: 100px;
    border: none;
    outline: none;
    margin-top: 8px;
    background: rgba(0, 154, 49, 1);
    color: #fff;
    border-radius: 20px;
    transition: 0.2s ease;
  }

  .login-form button:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .login-form button:hover {
    background: rgba(103, 161, 37, 1);
  }

  .links {
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .links p {
    color: dodgerblue;
    cursor: pointer;
  }
`;
