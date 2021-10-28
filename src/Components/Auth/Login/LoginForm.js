import styled from "styled-components";

const LoginForm = ({createAccount}) => {
  return (
    <MainLoginForm>
      <div className="form">
        <div className="form-header">
          <h3>Login</h3>
        </div>
        <form className="login-form">
          <div>
            <label htmlFor="email">Email:</label>
            <input required type="email" id="email" placeholder="Enter Email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input required type="password" id="password" placeholder="Enter Password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="links">
          <p>Forget Password!</p>
          <p onClick={createAccount}>Create an Account?</p>
        </div>
      </div>
    </MainLoginForm>
  );
};

export default LoginForm;

const MainLoginForm = styled.div`
  box-sizing: border-box;
  background: linear-gradient(to bottom, rgba(91,209,215,0.7), rgba(242,244,246,1));
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
    background: rgba(18,27,116,1);
    color: #fff;
    border-radius: 20px;
    transition: 0.3s ease;

  }

  .login-form button:hover {
      background: rgba(45,36,138,1);
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
