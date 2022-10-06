import logo from "assets/icons/logo/logo.svg";
import { useState } from "react";
import styled from "styled-components";

// Styling
const NavbarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarItems = styled.ul`
  display: flex;
  gap: 4rem;
  font-size: var(--md-font);
`;

const NavbarItem = styled.li`
  text-transform: capitalize;
`;

function Navbar() {
  const [items] = useState(["home", "bags", "sneakers", "belt", "contact"]);

  // Map component from item navbar
  const navbarItem = items.map((item) => (
    <NavbarItem key={item}>{item}</NavbarItem>
  ));

  return (
    <NavbarWrap>
      <img src={logo} alt="logo" />
      <NavbarItems>{navbarItem}</NavbarItems>
    </NavbarWrap>
  );
}

export default Navbar;
