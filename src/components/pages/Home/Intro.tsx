import React from "react";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import "./styles.scss";

const Intro = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 376px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 1000px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1500px)" });

  return (
    <div
      className={classNames("wrapper-home-intro", {
        "wrapper-home-intro--mobile": isMobile,
        "wrapper-home-intro--tablet": isTablet,
        "wrapper-home-intro--desktop": isDesktop,
      })}
    >
      <p className='wrapper-home-intro__info'>New product</p>
      <h1 className='wrapper-home-intro__title'>
        XX99 Mark II
        <br />
        Headphones
      </h1>
      <p className='wrapper-home-intro__description'>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button className='default-button'>See Product</button>
    </div>
  );
};

export default Intro;
