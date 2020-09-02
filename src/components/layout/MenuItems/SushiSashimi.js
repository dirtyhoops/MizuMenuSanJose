import React from 'react';
import { sushiSashimi } from '../../../datas/dinnerItems';

const SushiSashimi = props => {
  const { bground } = props;
  return (
    <div className={`dinner-box ${bground}`} id='sushisashimi'>
      <div className='dinner-box-header'>
        <p className='heading-secondary'>Sushi & Sashimi</p>
      </div>
      <div className='sushisashimi-box-container'>
        <ul>
          <li>
            <p className='sushisashimi-list-name'></p>
            <p className='sushisashimi-list-header'>
              <span className='u-text-bold'>Sushi</span>(2pcs)
            </p>
            <p className='sushisashimi-list-header'>
              <span className='u-text-bold'>Sashimi</span>(4pcs)
            </p>
          </li>
          {sushiSashimi.map((item, index) => (
            <li key={index}>
              <p className='sushisashimi-list-name'>
                {item.name} ({item.japaneseName})
              </p>
              <p className='sushisashimi-list-sushi'>{item.priceSushi}</p>
              <p className='sushisashimi-list-sashimi'>{item.priceSashimi}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SushiSashimi;
