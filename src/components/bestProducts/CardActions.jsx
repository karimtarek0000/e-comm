import RenderSVG from "components/helpers/RenderSVG";
import { useState } from "react";
import styled from "styled-components";

// Style
const ActionsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AddTo = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  background-color: var(--fifth-color);
  color: var(--seventh-color);
  font-size: 1.5rem;
  text-transform: capitalize;
  box-shadow: 0px 28px 27px rgba(var(--fifth-color-rgb), 0.5);
  transition: transform 0.5s ease;
  cursor: pointer;

  @media only screen and (hover: hover) {
    :hover {
      transform: translateY(-0.5rem);
    }
  }

  /* SVG */
  svg {
    fill: var(--seventh-color);
  }
`;

function CardActions() {
  const [fav, setFav] = useState(false);
  const [cart, setCart] = useState(false);

  // Handlers
  const addToFavorit = (e) => {
    e.stopPropagation();
    setFav(!fav);
  };

  const addToCart = (e) => {
    e.stopPropagation();
    setCart(!cart);
  };

  return (
    <ActionsWrap>
      {/* Add to cart */}
      <AddTo onClick={addToCart}>
        <RenderSVG size="20" name={cart ? "cart-fill" : "cart"} />
      </AddTo>

      {/* Add to favorit */}
      <AddTo onClick={addToFavorit}>
        <RenderSVG size="20" name={fav ? "favorit-fill" : "favorit"} />
      </AddTo>
    </ActionsWrap>
  );
}

export default CardActions;
