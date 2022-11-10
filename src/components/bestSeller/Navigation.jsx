import { useState } from "react";
import styled from "styled-components";

// Style
const NavWrapp = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

const NavItem = styled.li`
  font-size: 2.2rem;
  text-transform: capitalize;
  padding-bottom: 0.5rem;
  cursor: pointer;

  /* When user clicked on item */
  &.active {
    position: relative;
    color: var(--first-color);

    ::after {
      content: "";
      position: absolute;
      border: 1px solid var(--first-color);
      bottom: 0;
      inset-inline-start: 0;
      right: 0;
    }
  }
`;

function Navigation() {
  const [items] = useState(["all", "shoes", "bags", "belt", "snakers"]);
  const [active, setActive] = useState(items[0]);

  // Handlers
  const changeCategory = (item) => setActive(item);

  const ListItem = items.map((item) => (
    <NavItem
      key={item}
      className={item === active && "active"}
      onClick={changeCategory.bind(this, item)}
    >
      {item}
    </NavItem>
  ));

  return <NavWrapp>{ListItem}</NavWrapp>;
}

export default Navigation;
