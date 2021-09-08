import React from "react";
import hamburgerMenuIcon from "./../../assets/shared/tablet/icon-hamburger.svg";
import logo from "./../../assets/shared/desktop/logo.svg";
import cartIcon from "./../../assets/shared/desktop/icon-cart.svg";

import "./styles.scss";

const Header = () => {
  return (
    <header className='wrapper-header'>
      <img
        className='wrapper-header__burger-menu-icon'
        src={hamburgerMenuIcon}
        alt='Hamburger Menu'
      />
      <img className='wrapper-header__logo' src={logo} alt='Logo' />
      <img className='wrapper-header__cart-icon' src={cartIcon} alt='Cart' />
    </header>
  );
};

export default Header;
