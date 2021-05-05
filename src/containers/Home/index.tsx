import React from "react";
import ProductList from "./ProductList";
import Slider from "./Slider";

const Home: React.FC = () => {
  return (
    <div>
      <Slider />
      <ProductList />
    </div>
  );
};
export default Home;
