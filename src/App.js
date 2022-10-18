import NavbarActions from "components/layout/navbar/NavbarActions";
import { Route, Routes } from "react-router-dom";
import Auth from "routes/auth/Auth.component";
import Home from "routes/home/Home.component";
import Product from "routes/product/Product.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarActions />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/product/:name" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
