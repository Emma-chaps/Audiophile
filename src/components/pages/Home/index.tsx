import React from "react";
import Categories from "../../Categories";
import Header from "../../Header";
import Intro from "./Intro";
import Products from "./Products";

import "./styles.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Categories />
        <Products />
      </main>
    </>
  );
};

export default Home;
