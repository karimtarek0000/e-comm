import image from "assets/img/header/1.webp";
// import CardActions from "components/bestProducts/CardActions";
import { Discount, Paragraph, Price, PriceWrapp, Row } from "style";
import styled from "styled-components";

// Style
const CardWrapp = styled(Row)`
  flex-flow: column nowrap;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid var(--third-color);
  padding-block-end: 1rem;
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
          <Discount dis>$554</Discount>
          <Discount>24% Off</Discount>
          <Price>$500</Price>
        </PriceWrapp>
      </CardInfoWrapp>
    </CardWrapp>
  );
}

export default BestSellerCard;
