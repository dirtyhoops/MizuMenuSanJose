import React from 'react';

const SakeBeer = props => {
  const { bground } = props;
  return (
    <div className={`sakebeer-box ${bground}`} id='sakebeer'>
      <div className='sakebeer-box-header'>
        <p className='heading-secondary'>sake</p>
      </div>
      <div className='sakebeer-box-container'>
        <ul>
          <li>
            <p className='sakebeer-text-type li-bottom-margin'>hot sake</p>
            <p className='sakebeer-text-price price-top-margin'>7</p>
          </li>
          <li>
            <p className='sakebeer-text-type'>unfiltered cold sake</p>
            <p className='sakebeer-text-name'>
              nigori<span className='sakebeer-text-span'>375ml</span>
            </p>
            <p className='sakebeer-text-price'>14</p>
          </li>
          <li>
            <p className='sakebeer-text-name'>
              sayuri<span className='sakebeer-text-span'>300ml</span>
            </p>
            <p className='sakebeer-text-price'>14</p>
          </li>

          <li>
            <p className='sakebeer-text-type'>filtered cold sake</p>
            <p className='sakebeer-text-name'>
              karatanba<span className='sakebeer-text-span'>300ml</span>
            </p>
            <p className='sakebeer-text-price'>18</p>
          </li>
          <li>
            <p className='sakebeer-text-name'>
              kamotsuru<span className='sakebeer-text-span'>300ml</span>
            </p>
            <p className='sakebeer-text-price'>20</p>
          </li>
          <li>
            <p className='sakebeer-text-name'>
              amabuki daiginjo<span className='sakebeer-text-span'>720ml</span>
            </p>
            <p className='sakebeer-text-price'>70</p>
          </li>
        </ul>
        <div className='sakebeer-box-header'>
          <p className='heading-secondary u-margin-top-xxl'>Beer</p>
        </div>
        <div className='sakebeer-box-container'>
          <ul>
            <li>
              <p className='sakebeer-text-type'>bottle</p>
              <p className='sakebeer-text-name'>heineken</p>
              <p className='sakebeer-text-price'>6.5</p>
            </li>
            <li>
              <p className='sakebeer-text-name'>blue moon</p>
              <p className='sakebeer-text-price'>6.5</p>
            </li>
            <li>
              <p className='sakebeer-text-name'>stella artois</p>
              <p className='sakebeer-text-price'>6.5</p>
            </li>
            <li>
              <p className='sakebeer-text-name'>corona</p>
              <p className='sakebeer-text-price'>6.5</p>
            </li>
            <li>
              <p className='sakebeer-text-name'>lagunitas IPA</p>
              <p className='sakebeer-text-price'>7</p>
            </li>
            <li>
              <p className='sakebeer-text-name'>orion</p>
              <p className='sakebeer-text-price'>10</p>
            </li>
            <li>
              <p className='sakebeer-text-name'>echigo stout</p>
              <p className='sakebeer-text-price'>8.5</p>
            </li>
            <li>
              <p className='sakebeer-text-name'>echigo</p>
              <p className='sakebeer-text-price'>10</p>
            </li>

            <li>
              <p className='sakebeer-text-type'>draught</p>
              <p className='sakebeer-text-name'>
                kirin ichiban
                <span className='sakebeer-text-span'>12 oz / 22 oz</span>
              </p>
              <p className='sakebeer-text-price'>6.5 / 9.5</p>
            </li>
            <li>
              <p className='sakebeer-text-name'>
                sapporo<span className='sakebeer-text-span'>12 oz / 22 oz</span>
              </p>
              <p className='sakebeer-text-price'>6.5 / 9.5</p>
            </li>
            <li>
              <p className='sakebeer-text-name'>
                asahi
                <span className='sakebeer-text-span'>12 oz / 22 oz</span>
              </p>
              <p className='sakebeer-text-price'>6.5 / 9.5</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SakeBeer;
