import React from 'react';
import { Link } from 'react-scroll';

import HomeButtonLink from './HomeButtonLink';

const DrinkNavBar = () => {
  return (
    <header className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-container__left'>
          <ul>
            <Link
              activeClass='active'
              to='cocktails'
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <li>Cocktails</li>
            </Link>
            <Link
              activeClass='active'
              to='sakebeer'
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <li>Sake & Beer</li>
            </Link>
            <Link
              activeClass='active'
              to='wines'
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <li>Wines</li>
            </Link>
            <Link
              activeClass='active'
              to='spirits'
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <li>Spirits</li>
            </Link>
          </ul>
        </div>
      </div>
      <HomeButtonLink />
    </header>
  );
};

export default DrinkNavBar;
