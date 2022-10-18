import BestProducts from "components/bestProducts/BestProducts";
import BestSeller from "components/bestSeller/BestSeller";
import Header from "components/layout/header/Header";

function Home() {
  return (
    <main>
      <Header />
      <BestProducts />
      <BestSeller />
    </main>
  );
}

export default Home;
