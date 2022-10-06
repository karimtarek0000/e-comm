import logo from "assets/icons/logo/logo.svg";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import NavbarStatus from "../navbar/NavbarStatus";

// Styling
const HeaderWrap = styled.header`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
  }
`;

function Header() {
  return (
    <HeaderWrap className="container">
      <NavbarStatus />
      <div>
        <img src={logo} alt="logo" />
        <Navbar />
      </div>
    </HeaderWrap>
  );
}

export default Header;
