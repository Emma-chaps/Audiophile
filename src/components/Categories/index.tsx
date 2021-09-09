import React from "react";
import iconArrow from "./../../assets/shared/desktop/icon-arrow-right.svg";

import "./styles.scss";

// type AppProps = {
//   data: [{ category: string }];
// };

const Categories = () => {
  const isMobile = true;
  const isTablet = true;
  const isDesktop = true;

  // const findCategories = ({ data }: AppProps) => {
  //   const categoriesName: string[] = [];
  //   for (const element of data) {
  //     const categoryFound = categoriesName.find(
  //       (name) => name === element.category
  //     );
  //     if (!categoryFound) {
  //       categoriesName.push(element.category);
  //     }
  //   }
  //   console.log(categoriesName);
  //   return categoriesName;
  // };
  // useEffect(() => {
  //   findCategories(data);
  // });

  return (
    <div className='wrapper-categories'>
      <ul>
        <li className='list'>
          <div className='list__container'>
            <img
              className='list__container__img'
              src={
                isMobile
                  ? require(`./../../assets/shared/desktop/image-headphones.png`)
                      .default
                  : isTablet
                  ? require(`./../../assets/shared/desktop/image-headphones.png`)
                      .default
                  : isDesktop
                  ? require(`./../../assets/shared/desktop/image-headphones.png`)
                      .default
                  : null
              }
              alt='category'
            />
            <h2 className='list__container__title'>Headphones</h2>
            <button className='list__container__btn'>
              Shop <img src={iconArrow} alt='arrow' />
            </button>
          </div>
        </li>
        <li className='list'>
          <div className='list__container'>
            <img
              className='list__container__img'
              src={
                isMobile
                  ? require(`./../../assets/shared/desktop/image-speakers.png`)
                      .default
                  : isTablet
                  ? require(`./../../assets/shared/desktop/image-speakers.png`)
                      .default
                  : isDesktop
                  ? require(`./../../assets/shared/desktop/image-speakers.png`)
                      .default
                  : null
              }
              alt='category'
            />
            <h2 className='list__container__title'>Speakers</h2>
            <button className='list__container__btn'>
              Shop <img src={iconArrow} alt='arrow' />
            </button>
          </div>
        </li>
        <li className='list'>
          <div className='list__container'>
            <img
              className='list__container__img'
              src={
                isMobile
                  ? require(`./../../assets/shared/desktop/image-earphones.png`)
                      .default
                  : isTablet
                  ? require(`./../../assets/shared/desktop/image-earphones.png`)
                      .default
                  : isDesktop
                  ? require(`./../../assets/shared/desktop/image-earphones.png`)
                      .default
                  : null
              }
              alt='category'
            />
            <h2 className='list__container__title'>Earphones</h2>
            <button className='list__container__btn'>
              Shop <img src={iconArrow} alt='arrow' />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
