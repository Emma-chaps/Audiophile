import React from "react";
import zx9 from "./../../../assets/home/mobile/image-speaker-zx9.png";
import yx1 from "./../../../assets/home/mobile/image-earphones-yx1.jpg";

const Products = () => {
  return (
    <div className='wrapper-products margin-specifique'>
      <aside className='product-zx9'>
        <div className='product-zx9-background-img'>
          <div className='product-zx9__img-container'>
            <img
              className='product-zx9__img-container__img-zx9-home'
              src={zx9}
              alt='speaker'
            />
          </div>
          <h3 className='product-zx9__title'>
            Zx9
            <br />
            Speaker
          </h3>
          <p className='product-zx9__description'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className='product-zx9__btn'>See product</button>
        </div>
      </aside>
      <aside className='product-zx7'>
        <h3 className='product-zx7__title'>ZX7 speaker</h3>
        <button className='product-zx7__btn'>See product</button>
      </aside>
      <aside className='product-yx1'>
        <img className='product-yx1__img' src={yx1} alt='' />
        <div className='product-yx1__container'>
          <h3 className='product-yx1__container__title'>YX1 earphones</h3>
          <button className='product-yx1__container__btn'>See product</button>
        </div>
      </aside>
    </div>
  );
};

export default Products;
