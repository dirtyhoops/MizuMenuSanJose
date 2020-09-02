import React, { Fragment } from 'react';
import MenuItems from '../../layout/MenuItems/MenuItems';
import SushiSashimi from '../../layout/MenuItems/SushiSashimi';
import MakiRolls from '../../layout/MenuItems/MakiRolls';
import Sides from '../../layout/MenuItems/Sides';
import NavBar from '../../layout/NavBarSanJose/NavBar';

import {
  dinnerHotAppetizers,
  dinnerColdAppetizers,
  sushiRolls,
  dinnerEntrees,
  dinnerSides,
  dinnerSushiSashimi
} from '../../../datas/dinnerItems';

import {
  coldAppetizersImages,
  rollsImages,
  hotAppetizersImages,
  entreesImages,
  sideImages,
  sushiSashimiImages
} from '../../../datas/itemsImages';

const DinnerMenuSanJose = () => {
  return (
    <Fragment>
      <NavBar />
      <div className='dinner-wrapper'>
        <Sides bground={'blackwhite'} items={dinnerSides} images={sideImages} />

        <MenuItems
          bground={'whiteblack'}
          header={'hot appetizers'}
          wrapper_id={'hotappetizers'}
          items={dinnerHotAppetizers}
          images={hotAppetizersImages}
        />

        <MenuItems
          bground={'blackwhite'}
          header={'cold appetizers'}
          wrapper_id={'coldappetizers'}
          items={dinnerColdAppetizers}
          images={coldAppetizersImages}
        />

        <MenuItems
          bground={'whiteblack'}
          header={'special rolls'}
          wrapper_id={'specialrolls'}
          items={sushiRolls}
          images={rollsImages}
        />

        <SushiSashimi bground={'blackwhite'} />
        <MenuItems
          bground={'blackwhite'}
          header={'sushi & sashimi dinner'}
          wrapper_id={'sushidinner'}
          items={dinnerSushiSashimi}
          images={sushiSashimiImages}
          bigpicture={'true'}
        />

        <MakiRolls bground={'whiteblack'} />

        <MenuItems
          bground={'blackwhite'}
          header={'entrees'}
          wrapper_id={'entrees'}
          items={dinnerEntrees}
          images={entreesImages}
        />
      </div>
    </Fragment>
  );
};

export default DinnerMenuSanJose;
