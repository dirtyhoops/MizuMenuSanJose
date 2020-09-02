import React from 'react';
import { Link } from 'react-router-dom';

const HomeButtonLink = () => {
  return (
    <div className='navbar-container__right'>
      <Link to={'/'}>
        <p className='home-button'>
          <i class='fa fa-home' aria-hidden='true'></i>
        </p>
      </Link>
    </div>
  );
};

export default HomeButtonLink;
