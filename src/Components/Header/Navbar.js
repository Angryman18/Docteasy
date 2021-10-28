import DesktopNavbar from "./NavbarDesktop";
import MobileNavbar from "./NavbarMobile";
import styled from "styled-components";
import NavbarData from "../../Data/navData";

const Navbar = () => {
  return (
    <Content>
      <div className="desktop">
        <DesktopNavbar {...NavbarData} />
      </div>
      <div className="mobile">
        <MobileNavbar {...NavbarData} />
      </div>
    </Content>
  );
};

export default Navbar;

const Content = styled.div`
  @media screen and (min-width: 768px) {
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;
