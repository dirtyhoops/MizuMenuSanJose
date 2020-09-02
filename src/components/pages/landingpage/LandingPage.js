import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='landing-wrapper'>
      <div className='landing-header'>
        <div className='landing-header__image'></div>
      </div>
      <div className='landing-actions'>
        <Link className='link' to={'/drinks'}>
          <button className='button-options'>Drinks</button>
        </Link>
        <Link className='link' to={'/lunch'}>
          <button className='button-options'>Lunch</button>
        </Link>
        <Link className='link' to={'/dinner'}>
          <button className='button-options'>Dinner</button>
        </Link>
      </div>
      <div className='landing-hours'>
        <div className='landing-hours-box'>
          <p className='landing-hours-text-days'>monday - thursday</p>
          <p className='landing-hours-text-hours'>11:30am - 2:30pm</p>
          <p className='landing-hours-text-hours'>5:00pm - 8:00pm</p>
        </div>
        <div className='landing-hours-box'>
          <p className='landing-hours-text-days'>friday - sunday</p>
          <p className='landing-hours-text-hours'>11:30am - 2:30pm</p>
          <p className='landing-hours-text-hours'>5:00pm - 9:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
