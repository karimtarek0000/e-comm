import promImage from "assets/img/header/promotion-Image.webp";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import NavbarActions from "../navbar/NavbarActions";

// Styling
const HeaderWrap = styled.header`
  height: 100vh;

  .navbar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 0;
  }
`;

const Promotion = styled.div`
  height: 82%;
  position: relative;
`;

const H1 = styled.h1`
  position: absolute;
  top: 50%;
  max-width: 60rem;
  transform: translateY(-50%);
  font-size: 6.4rem;
  color: var(--seventh-color);
`;

function Header() {
  return (
    <HeaderWrap>
      {/* All navbar */}
      <div className="navbar container">
        <NavbarActions />
        <Navbar />
      </div>
      {/* Promotion */}
      <Promotion>
        <img className="res-img" src={promImage} alt="promImage" />
        <div className="container">
          <H1>Super Flash Sale 50% Off</H1>
        </div>
      </Promotion>
    </HeaderWrap>
  );
}

export default Header;
