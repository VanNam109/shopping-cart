/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Route } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const HomeLayout = (props: any) => {
  // console.log(props.children);
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};
export const HomeTemplates: React.FC<any> = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
};
