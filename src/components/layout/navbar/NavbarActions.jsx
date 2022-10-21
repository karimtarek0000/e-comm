import logo from "assets/icons/logo/logo.svg";
import RenderSVG from "components/helpers/RenderSVG";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import ProfileList from "../header/ProfileList";

// Styling
const NavbarActionsWrap = styled.div`
  max-height: 11vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  gap: ${({ gap }) => (gap ? gap : "0")};
`;

const CountItem = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -18px;
  inset-inline-start: 20px;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--fifth-color);
  color: var(--seventh-color);
  font-size: var(--xs-font);
`;

const IconWrap = styled.div`
  position: relative;
  line-height: 0;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 50rem;
  border: 1px solid var(--second-color);
  border-radius: 0.5rem;
  padding-inline-end: 0.5rem;
  overflow: hidden;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 0.3rem;
  margin-inline-end: 0.5rem;
  border: 1px solid transparent;
  transition: all 0.4s ease;

  &:focus {
    border: 1px solid var(--fourth-color);
  }
`;

const UserProfile = styled.div`
  position: relative;
  cursor: pointer;
`;

function NavbarActions() {
  const [toggle, setToggle] = useState(false);

  const toggleProfile = () => setToggle(!toggle);

  return (
    <>
      <NavbarActionsWrap className="container">
        {/* Left side */}
        <NavbarActionsWrap>
          <RenderSVG size="7rem" name="burger-menu" />
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </NavbarActionsWrap>

        {/* Search */}
        <NavbarActionsWrap>
          <Form>
            <Input type="text" placeholder="Search products..." />
            <RenderSVG size="3rem" name="search" />
          </Form>
        </NavbarActionsWrap>

        {/* Right side */}
        <NavbarActionsWrap gap="3rem">
          {/* Cart shopping */}
          <Link to="/auth">
            <IconWrap>
              <RenderSVG size="2.5rem" name="cart" />
              <CountItem>0</CountItem>
            </IconWrap>
          </Link>

          {/* Favorit */}
          <Link to="/auth">
            <IconWrap>
              <RenderSVG size="2.5rem" name="favorit" />
              <CountItem>0</CountItem>
            </IconWrap>
          </Link>

          {/* User */}
          <UserProfile onClick={toggleProfile}>
            <RenderSVG size="2.5rem" name="user" />
            <ProfileList toggle={toggle} />
          </UserProfile>

          {/* Change language */}
          <NavbarActionsWrap>
            <p>En</p>
          </NavbarActionsWrap>
        </NavbarActionsWrap>
      </NavbarActionsWrap>

      {/* For routing */}
      <Outlet />
    </>
  );
}

export default NavbarActions;
