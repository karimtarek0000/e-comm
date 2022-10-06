import { useState } from "react";
import styled from "styled-components";

// Styling
const NavbarWrap = styled.ul`
  display: flex;
  gap: 4rem;
  font-size: 2.4rem;
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
    <>
      <NavbarWrap>{navbarItem}</NavbarWrap>
    </>
  );
}

export default Navbar;
