import React, { useReducer } from "react";
import { cartReducer, initialState } from "../reducers/reducer";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";
import Slider from "./Slider";

const Shop: React.FC = () => {
  const [cartState] = useReducer(cartReducer, initialState);

  return (
    <div>
      <Header cartState={cartState.cart} />
      <Slider />
      <ProductList />
      <Footer />
    </div>
  );
};
export default Shop;
