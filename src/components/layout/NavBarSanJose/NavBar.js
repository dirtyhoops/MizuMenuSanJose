import React from 'react';
import { Link } from 'react-scroll';

import HomeButtonLink from './HomeButtonLink';

const NavBar = () => {
  return (
    <header className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-container__left'>
          <ul>
            <Link
              activeClass='active'
              to='sides'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <li>Sides</li>
            </Link>
            <Link
              activeClass='active'
              to='salads'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <li>Salads</li>
            </Link>
            <Link
              activeClass='active'
              to='hotappetizers'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <li>Hot Appetizers</li>
            </Link>
            <Link
              activeClass='active'
              to='coldappetizers'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <li>Cold Appetizers</li>
            </Link>

            <Link
              activeClass='active'
              to='sushisashimi'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <li>Sushi & Sashimi</li>
            </Link>
            <Link
              activeClass='active'
              to='specialrolls'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <li>Sushi Rolls</li>
            </Link>
            <Link
              activeClass='active'
              to='maki'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <li>Maki</li>
            </Link>
            <Link
              activeClass='active'
              to='entrees'
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <li>Entrees</li>
            </Link>
          </ul>
        </div>
      </div>
      <HomeButtonLink />
    </header>
  );
};

export default NavBar;
