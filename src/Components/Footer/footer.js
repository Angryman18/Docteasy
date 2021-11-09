import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../image/logo.svg";
import Images from "../../image";

const Footer = () => {
  return (
    <FooterMain>
      <FooterInner>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <FooterMiddle>
          <h4>Quick Links</h4>
          <hr />
          <section>
            <ul>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Career</Link>
              </li>
              <li>
                <Link to="/">Advertisement</Link>
              </li>
              <li>
                <Link to="/">Refund Policy</Link>
              </li>
              <li>
                <Link to="/">Complaints</Link>
              </li>
            </ul>
          </section>
        </FooterMiddle>
        <SocialMedia>
          <h4>Social Media</h4>
          <hr />
          <section>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-telegram"></i>
          </section>
        </SocialMedia>
      </FooterInner>
      <Credit>
        <p>
          Designed by{" "}
          <a
            href="https://www.facebook.com/imsmahanta"
            rel="noreferrer"
            target="_blank"
          >
            Shyam Mahanta
          </a>
        </p>
      </Credit>
    </FooterMain>
  );
};

export default Footer;

const FooterMain = styled.div`
  width: 100%;
  height: 280px;
  background-color: #263859;

  @media screen and (max-width: 768px) {
    height: 440px;
    margin: 0;
    padding: 0;
  }
`;

const FooterInner = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div``;

const FooterMiddle = styled.div`
  color: #fff;

  hr {
    border: 2px solid #f7fafa;
    border-radius: 5px;
  }

  section ul li {
    list-style: none;
  }

  section ul li a {
    color: #50c1e9;
  }

  @media screen and (max-width: 480px) {
    hr {
      background-color: #fff;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
`;

const SocialMedia = styled.div`
  color: #fff;

  section {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }

  hr {
    border: 2px solid #f7fafa;
    border-radius: 5px;
  }

  section i {
    padding: 5px;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    transition: 0.1s ease;
  }
  section i:hover {
    color: #00a0ff;
  }

  @media screen and (max-width: 480px) {
    hr {
      background-color: #fff;
      height: 1px;
    }
    h4 {
      font-size: 1.2rem;
    }
    
  }
`;

const Credit = styled.div`
  color: #fff;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
`;
