import React from 'react';

const WineItem = (props) => {
  const { header, items } = props;
  return (
    <div className='wines-box-container-items'>
      <p className='wines-text-type'>{header}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p className='wines-text-name'>
              {item.name}
              <span className='wines-text-span'> - {item.location}</span>
            </p>
            <p className='wines-text-price-glass'>{item.priceGlass}</p>
            <p className='wines-text-price-bottle'>{item.priceBottle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WineItem;
