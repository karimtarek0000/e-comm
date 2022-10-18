import { useState } from "react";
import { ResponsiveCols } from "style";
import styled from "styled-components";
import CardBestProduct from "./CardBestProduct";

// Style
const Section = styled.section`
  position: relative;
  margin-top: -20rem;
  margin-bottom: 5rem;
`;

function BestProducts() {
  const [products] = useState([
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 567,
      dis: 600,
      prec: 25,
    },
    {
      id: 2,
      name: "Nike Air Max 270",
      price: 982,
      dis: 600,
      prec: 25,
    },
    {
      id: 3,
      name: "FS - QUILTED MAXI CROSS BAG",
      price: 1200,
      dis: 500,
      prec: 23,
    },
  ]);

  const ListCardBestProduct = products.map((prod) => (
    <CardBestProduct
      key={prod.id}
      name={prod.name}
      price={prod.price}
      dis={prod.dis}
      prec={prod.prec}
    />
  ));

  return (
    <Section className="container">
      <ResponsiveCols col="3">{ListCardBestProduct}</ResponsiveCols>
    </Section>
  );
}

export default BestProducts;
