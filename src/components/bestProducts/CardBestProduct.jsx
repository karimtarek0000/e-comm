import logo from "assets/img/header/1.webp";
import styled from "styled-components";

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
`;

const H5 = styled.h5`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const PriceWrapp = styled.p`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const Discount = styled.span`
  font-size: 1.5rem;
  ${(props) =>
    props.dis
      ? {
          color: "var(--eighth-color)",
          textDecoration: "line-through",
          fontWeight: 200,
        }
      : { color: "var(--second-color)" }}
`;

const Price = styled(Discount)`
  color: var(--fourth-color);
  display: block;
  margin-left: auto;
  font-size: 3rem;
`;

const ImageWrapp = styled.div`
  max-width: 75%;
  margin: 2rem auto;
  overflow: hidden;
`;

function CardBestProduct(props) {
  const { name, dis, prec } = props;

  return (
    <CardWrapp>
      <H5 className="truncut">{name}</H5>

      <PriceWrapp>
        <Discount dis>${dis}</Discount>
        <Discount>{prec}% Off</Discount>
      </PriceWrapp>

      <ImageWrapp>
        <img className="res-img" src={logo} alt="logo" />
      </ImageWrapp>

      <PriceWrapp>
        <Price>$575</Price>
      </PriceWrapp>
    </CardWrapp>
  );
}

export default CardBestProduct;
