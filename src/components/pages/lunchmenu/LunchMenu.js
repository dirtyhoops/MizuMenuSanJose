import React, { Fragment } from 'react';
import MenuItems from '../../layout/MenuItems/MenuItems';
import SushiSashimi from '../../layout/MenuItems/SushiSashimi';
import Sides from '../../layout/MenuItems/Sides';
import NavBar from '../../layout/NavBar/NavBar';
import MakiRolls from '../../layout/MenuItems/MakiRolls';
import Bento from '../../layout/MenuItems/Bento';

import {
  lunchHotAppetizers,
  lunchColdAppetizers,
  sushiRolls,
  lunchEntrees,
  lunchSushiSashimi,
  lunchSides,
  bento,
  bento1
} from '../../../datas/lunchItems';

import {
  lunchColdAppetizersImages,
  rollsImages,
  lunchHotAppetizersImages,
  entreesImages,
  sushiSashimiImages,
  sideImages
} from '../../../datas/itemsImages';

const LunchMenu = () => {
  return (
    <Fragment>
      <NavBar />

      <div className='dinner-wrapper'>
        <Sides bground={'blackwhite'} items={lunchSides} images={sideImages} />
        <MenuItems
          bground={'whiteblack'}
          header={'hot appetizers'}
          wrapper_id={'hotappetizers'}
          items={lunchHotAppetizers}
          images={lunchHotAppetizersImages}
        />

        <MenuItems
          bground={'blackwhite'}
          header={'cold appetizers'}
          wrapper_id={'coldappetizers'}
          items={lunchColdAppetizers}
          images={lunchColdAppetizersImages}
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
          header={'sushi & sashimi lunch'}
          wrapper_id={'sushidinner'}
          items={lunchSushiSashimi}
          images={sushiSashimiImages}
          bigpicture={'true'}
        />

        <MakiRolls bground={'whiteblack'} />
        <MenuItems
          bground={'blackwhite'}
          header={'entrees'}
          wrapper_id={'entrees'}
          items={lunchEntrees}
          images={entreesImages}
        />
        <Bento
          bground={'blackwhite'}
          wrapper_id={'bento'}
          bento={bento}
          bento1={bento1}
        />
      </div>
    </Fragment>
  );
};

export default LunchMenu;
