import React, { Fragment } from 'react';
import DrinkNavBar from '../../layout/NavBarSanJose/DrinkNavBar';
import Cocktails from '../../layout/MenuItems/Cocktails';
import { cocktails, cocktails2 } from '../../../datas/drinkItems';
import SakeBeer from '../../layout/MenuItems/SakeBeer';
import Wines from '../../layout/MenuItems/Wines';
import Spirits from '../../layout/MenuItems/Spirits';

const DrinkMenu = () => {
  return (
    <Fragment>
      <DrinkNavBar />
      <div className='drinks-wrapper'>
        <Cocktails
          bground={'blackwhite'}
          items={cocktails}
          items2={cocktails2}
        />
        <Wines bground={'blackwhite'} />
        <SakeBeer bground={'blackwhite'} />
        <Spirits bground={'blackwhite'} />
      </div>
    </Fragment>
  );
};

export default DrinkMenu;
