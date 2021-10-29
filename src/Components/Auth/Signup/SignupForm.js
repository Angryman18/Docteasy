import styled from "styled-components";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

const SignupForm = ({ alreadyHaveAccount }) => {
  const [loading, setLoading] = React.useState(false);
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const confirmpassRef = React.useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confPassword = confirmpassRef.current.value;

    if (password !== confPassword) {
      toast.error("Password Doesn't Match!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        theme: "colored",
        transition: Slide
      });
      return false;
    }

    if (password.length < 6) {
      toast.error("Weak Password! Min 6 Char", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        theme: "colored",
        transition: Slide
      });
      return false;
    }
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      toast.error(error.code, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        theme: "colored",
        transition: Slide
      });
      console.clear()
      setLoading(false)
      return false;
    }
    setLoading(false);
    toast.success("Account Created Successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
      theme: "colored",
      transition: Slide
    });
  };


  return (
    <MainLoginForm>
      <div className="form">
        <div className="form-header">
          <h3>Sign Up</h3>
        </div>
        <form onSubmit={submitHandler} className="login-form">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              ref={emailRef}
              required
              type="email"
              id="email"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              ref={passwordRef}
              required
              type="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div>
            <label htmlFor="repassword">Re-Password:</label>
            <input
              ref={confirmpassRef}
              required
              type="password"
              id="repassword"
              placeholder="Re-Enter Password"
            />
          </div>
          <button disabled={loading} type="submit">
            {loading && <><span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="false"
            ></span>{" "}</>}
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
