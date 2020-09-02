import React from 'react';

const SakeBeer = (props) => {
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
            <p className='sakebeer-text-type'>nigori</p>
            <p className='sakebeer-text-name'>
              sayuri<span className='sakebeer-text-span'>300ml</span>
            </p>
            <p className='sakebeer-text-price'>16</p>
          </li>
          <li>
            <p className='sakebeer-text-type'>junmai</p>
            <p className='sakebeer-text-name'>
              suijin<span className='sakebeer-text-span'>300ml</span>
            </p>
            <p className='sakebeer-text-price'>24</p>
          </li>
          <li>
            <p className='sakebeer-text-type'>honjozo</p>
            <p className='sakebeer-text-name'>
              karatanba<span className='sakebeer-text-span'>300ml</span>
            </p>
            <p className='sakebeer-text-price'>18</p>
          </li>
          <li>
            <p className='sakebeer-text-type'>junmai ginjo</p>
            <p className='sakebeer-text-name'>
              hakutsuru<span className='sakebeer-text-span'>300ml</span>
            </p>
            <p className='sakebeer-text-price'>18</p>
          </li>
          <li>
            <p className='sakebeer-text-name'>
              shoin<span className='sakebeer-text-span'>500ml</span>
            </p>
            <p className='sakebeer-text-price'>46</p>
          </li>
          <li>
            <p className='sakebeer-text-type'>junmai daiginjo</p>
            <p className='sakebeer-text-name'>
              hakutsuru sho une
              <span className='sakebeer-text-span'>720ml</span>
            </p>
            <p className='sakebeer-text-price'>65</p>
          </li>
        </ul>
        <div className='sakebeer-box-header'>
          <p className='heading-secondary u-margin-top-xxl'>Beer</p>
        </div>
        <div className='sakebeer-box-container'>
          <ul>
            <li>
              <p className='sakebeer-text-type'>bottle</p>
              <p className='sakebeer-text-name'>
                kirin ichiban<span className='sakebeer-text-span'>22 oz</span>
              </p>
              <p className='sakebeer-text-price'>8</p>
            </li>
            <li>
              <p className='sakebeer-text-name'>
                asahi<span className='sakebeer-text-span'>21.4 oz</span>
              </p>
              <p className='sakebeer-text-price'>8</p>
            </li>
            <li>
              <p className='sakebeer-text-type'>draught</p>
              <p className='sakebeer-text-name'>sapporo</p>
              <p className='sakebeer-text-price'>6</p>
            </li>
            <li>
              <p className='sakebeer-text-name'>lagunitas ipa</p>
              <p className='sakebeer-text-price'>8</p>
            </li>
            <li>
              <p className='sakebeer-text-name'>seasonal selections</p>
              <p className='sakebeer-text-price'>M/P</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SakeBeer;
