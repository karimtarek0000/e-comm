import image from "assets/img/header/1.webp";
import { useNavigate } from "react-router-dom";
import { Discount, DiscountWrapp, Price, PriceWrapp } from "style";
import styled from "styled-components";
import CardActions from "./CardActions";

// Style
const CardWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  background-color: var(--third-color);
  overflow: hidden;
  max-height: 40rem;
  cursor: pointer;
`;

const H5 = styled.h5`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ImageWrapp = styled.div`
  max-width: 75%;
  margin: 2rem auto;
  overflow: hidden;
`;

function CardBestProduct(props) {
  const { name, price, dis, prec } = props;
  const navigate = useNavigate();

  return (
    <CardWrapp onClick={() => navigate(`/product/${name}`)}>
      <H5 className="truncut">{name}</H5>

      {/* Discount */}
      <DiscountWrapp>
        <Discount dis>${dis}</Discount>
        <Discount>{prec}% Off</Discount>
      </DiscountWrapp>

      {/* Image */}
      <ImageWrapp>
        <img className="res-img" src={image} alt="img" />
      </ImageWrapp>

      {/* Actions and price */}
      <PriceWrapp>
        <CardActions />
        <Price>${price}</Price>
      </PriceWrapp>
    </CardWrapp>
  );
}

export default CardBestProduct;
