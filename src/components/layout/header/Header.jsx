import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import NavbarActions from "../navbar/NavbarActions";

// Styling
const HeaderWrap = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0;
`;

function Header() {
  return (
    <HeaderWrap className="container">
      <NavbarActions />
      <Navbar />
    </HeaderWrap>
  );
}

export default Header;
