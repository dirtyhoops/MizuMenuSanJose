import React from 'react';

const Cocktails = props => {
  const { bground, items, items2 } = props;
  return (
    <div className={`cocktails-box ${bground}`} id='cocktails'>
      <div className='cocktails-box-header'>
        <p className='heading-secondary'>cocktails</p>
      </div>
      <div className='cocktails-box-container'>
        <div className='cocktails-box-container__left'>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <p className='cocktails-text-name'>{item.name}</p>
                <p className='cocktails-text-price'>{item.price}</p>
                <p className='cocktails-text-description'>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='cocktails-box-container__right'>
          <ul>
            {items2.map((item2, index) => (
              <li key={index}>
                <p className='cocktails-text-name'>{item2.name}</p>
                <p className='cocktails-text-price'>{item2.price}</p>
                <p className='cocktails-text-description'>
                  {item2.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cocktails;
