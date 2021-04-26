import React from "react";
import Footer from "../component/Footer";
import Header from "./Header";
import ProductList from "./ProductList";
import Slider from "./Slider";

const Shop: React.FC = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductList />
      <Footer />
    </div>
  );
};
export default Shop;
