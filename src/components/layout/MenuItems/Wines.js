import React, { Fragment } from 'react';
import WineItem from './WineItem';
import {
  redwine,
  merlot,
  pinotnoir,
  cabernet,
  riesling,
  pinotgrigio,
  chardonnay,
  sauvignonblanc,
  plumwine,
  sparklingwine,
} from '../../../datas/drinkItems';

const Wines = (props) => {
  const { bground } = props;
  return (
    <Fragment>
      <div className={`wines-box ${bground}`} id='wines'>
        <div className='wines-box-header'>
          <p className='heading-secondary'>Wines</p>
        </div>
        <div className='wines-box-container'>
          <div className='wines-box-container-items'>
            <ul>
              <li>
                <p className='wines-text-name'></p>
                <p className='wines-text-price-glass wines-text-bigger'>
                  <i class='fas fa-wine-glass'></i>
                </p>
                <p className='wines-text-price-bottle wines-text-bigger'>
                  <i class='fas fa-wine-bottle'></i>
                </p>
              </li>
            </ul>
          </div>
          <WineItem items={redwine} header={'red'} />
          <WineItem items={merlot} header={'merlot'} />
          <WineItem items={pinotnoir} header={'pinot noir'} />
          <WineItem items={cabernet} header={'cabernet'} />
          <WineItem items={riesling} header={'riesling'} />
          <WineItem items={pinotgrigio} header={'pinotgrigio'} />
          <WineItem items={chardonnay} header={'chardonnay'} />
          <WineItem items={sauvignonblanc} header={'sauvignon blanc'} />
          <WineItem items={plumwine} header={'plum wine'} />
          <WineItem items={sparklingwine} header={'sparkling wine'} />
        </div>
      </div>
    </Fragment>
  );
};

export default Wines;
