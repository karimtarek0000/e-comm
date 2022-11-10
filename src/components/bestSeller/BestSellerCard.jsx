import image from "assets/img/header/1.webp";
import CardActions from "components/bestProducts/CardActions";
import {
  Discount,
  DiscountWrapp,
  Paragraph,
  Price,
  PriceWrapp,
  Row,
} from "style";
import styled from "styled-components";

// Style
const CardWrapp = styled(Row)`
  position: relative;
  flex-flow: column nowrap;
  border-radius: 5px;
  padding-block-end: 3rem;
  border: 1px solid var(--third-color);
`;

const ImageWrapp = styled(Row)`
  background-color: var(--third-color);
  justify-content: center;
`;

const CardInfoWrapp = styled.div`
  padding-inline: 2rem;
  font-size: var(--md-font);
`;

const ProductDisc = styled(Paragraph)`
  margin-block-end: 1rem;
`;

const Badge = styled.span`
  position: absolute;
  top: -1.5rem;
  inset-inline-start: -1px;
  padding: 1rem 2rem;
  background-color: var(--second-color);
  color: var(--seventh-color);
  text-transform: capitalize;
  font-size: var(--xs-font);
  border-radius: 5px;
`;

function BestSellerCard() {
  return (
    <CardWrapp>
      {/* Image */}
      <ImageWrapp p="4">
        <img className="res-img" src={image} alt="img" />
      </ImageWrapp>

      {/* Info */}
      <CardInfoWrapp>
        <ProductDisc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quas,
          veniam ipsum quis nobis commodi obcaecati aperiam expedita non
          laudantium.
        </ProductDisc>

        {/* Price and discount */}
        <PriceWrapp>
          <Price>$500</Price>

          <DiscountWrapp>
            <Discount dis>$554</Discount>
            <Discount>24% Off</Discount>
          </DiscountWrapp>
        </PriceWrapp>
      </CardInfoWrapp>

      {/* Actions */}
      <CardActions />

      {/* Badge */}
      <Badge>hot</Badge>
    </CardWrapp>
  );
}

export default BestSellerCard;
