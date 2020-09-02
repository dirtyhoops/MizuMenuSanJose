import React from 'react';

const SpiritItem = (props) => {
  const { header, items } = props;
  return (
    <div className='spirits-box-container-items'>
      <p className='spirits-text-type'>{header}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p className='spirits-text-name'>{item.name}</p>
            <p className='spirits-text-price'>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpiritItem;
