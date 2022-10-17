import promImage from "assets/img/header/promotion-Image.webp";
import styled from "styled-components";

// Styling
const HeaderWrap = styled.header`
  height: 100vh;
`;

const Promotion = styled.div`
  height: calc(100vh - 11vh);
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
