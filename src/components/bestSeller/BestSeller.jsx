import { useState } from "react";
import { Row } from "style";
import BestSellerCard from "./BestSellerCard";
import Navigation from "./Navigation";

function BestSeller() {
  const [products] = useState([1, 2, 3, 4]);

  const ListBestSellerCard = products.map((prod) => (
    <BestSellerCard key={prod} />
  ));

  return (
    <section className="container">
      <Navigation />

      <Row mt="5" cols="4">
        {ListBestSellerCard}
      </Row>
    </section>
  );
}

export default BestSeller;
