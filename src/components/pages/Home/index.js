import React from "react";
import Header from "../../Header";
import HomeIntro from "./IntroHome";

import "./styles.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HomeIntro />
      </main>
    </>
  );
};

export default Home;
