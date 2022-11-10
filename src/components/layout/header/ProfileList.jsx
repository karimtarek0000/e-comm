import RenderSVG from "components/helpers/RenderSVG";
import { useState } from "react";
import styled from "styled-components";

// Style
const Profile = styled.div`
  position: absolute;
  top: 100%;
  inset-inline-end: 0;
  z-index: 100;
  background-color: var(--seventh-color);
  max-height: 0;
  transition: all 0.5s ease;
  border: 1px solid transparent;
  border-radius: 10px;
  overflow: hidden;

  &.active {
    border: 1px solid var(--third-color);
    max-height: 300px;
  }
`;

const ProfileWrapp = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 20rem;
`;

const ProfileItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--normal-font);
  padding: 0.5rem;
  border-radius: 10px;
  text-transform: capitalize;
  transition: all 0.2s ease;

  @media screen and (hover: hover) {
    :hover {
      background-color: var(--third-color);
    }
  }

  :not(:last-of-type) {
    margin-block-end: 1rem;
  }
`;

function ProfileList(props) {
  const { toggle } = props;
  const [actions] = useState([
    {
      title: "profile",
    },
    {
      title: "logout",
    },
  ]);

  const ListProfileItem = actions.map((action) => (
    <ProfileItem key={action.title}>
      <span>{action.title}</span>
      <RenderSVG size="15" name={action.title} />
    </ProfileItem>
  ));

  return (
    <Profile className={toggle && "active"}>
      <ProfileWrapp>{ListProfileItem}</ProfileWrapp>
    </Profile>
  );
}

export default ProfileList;
