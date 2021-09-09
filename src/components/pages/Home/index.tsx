import React from "react";
import Categories from "../../Categories";
import Header from "../../Header";
import HomeIntro from "./IntroHome";

import "./styles.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HomeIntro />
        <div>
          <Categories />
        </div>
      </main>
    </>
  );
};

export default Home;
