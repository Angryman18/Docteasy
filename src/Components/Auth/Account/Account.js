import styled from "styled-components";
import Images from "../../../image";

const Account = () => {
  const {setting} = Images
  return (
    <AccountSection>
      <img src={setting} width="200px" height="200px" alt="gear" />
      <h4>We are Building Account Section!</h4>
    </AccountSection>
  );
};

export default Account;

const AccountSection = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 630px) {
    flex-direction: column;
  }

  h4 {
    text-align:center;
  }

  img {
    pointer-events: none;
  }

`;
