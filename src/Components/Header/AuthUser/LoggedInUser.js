import styled from "styled-components";
import { Link } from "react-router-dom";

const LoggedInUser = () => {
  const SignOut = () => {};

  return (
    <LoggedUser>
      <div className="btn-group dropleft">
        <i
          className="fas fa-user-lock"
          style={{ fontSize: "1.5rem" }}
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        ></i>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" to="/dashboard">
            Dashboard
          </Link>
          <Link className="dropdown-item" to="/account">
            Account
          </Link>
          <button onClick={SignOut} className="dropdown-item" to="/signout">
            Sign Out
          </button>
        </div>
      </div>
    </LoggedUser>
  );
};

export default LoggedInUser;

const LoggedUser = styled.div``;
