import RenderSVG from "components/helpers/RenderSVG";
import styled from "styled-components";

// Styling
const NavbarActionsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  gap: ${(props) => (props.gap ? "2rem" : "0")};
`;

const CountItem = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -18px;
  left: 7px;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--fifth-color);
  color: var(--seventh-color);
  font-size: var(--xs-font);
`;

const TitleItem = styled.span`
  font-size: var(--normal-font);
  font-weight: 200;
  padding-inline-start: 0.5rem;
  text-transform: ${({ upper }) => (upper ? "uppercase" : "capitalize")};
`;

function NavbarActions() {
  return (
    <NavbarActionsWrap>
      {/* Left side */}
      <NavbarActionsWrap gap>
        <div>
          <TitleItem upper>usd</TitleItem>
        </div>
        <div>
          <TitleItem upper>egp</TitleItem>
        </div>
      </NavbarActionsWrap>

      {/* Right side */}
      <NavbarActionsWrap gap>
        {/* Profile */}
        <NavbarActionsWrap>
          <RenderSVG size="27px" name="profile" />
          <TitleItem>karim</TitleItem>
        </NavbarActionsWrap>

        {/* Cart */}
        <NavbarActionsWrap>
          <div style={{ position: "relative" }}>
            <CountItem>3</CountItem>
            <RenderSVG size="30px" name="cart" />
          </div>
          <TitleItem>items</TitleItem>
        </NavbarActionsWrap>
      </NavbarActionsWrap>
    </NavbarActionsWrap>
  );
}

export default NavbarActions;
