import React from 'react';

const Sides = (props) => {
  const { bground, items, images } = props;
  return (
    <div className={`dinner-box ${bground}`} id='sides'>
      <div className='dinner-box-header'>
        <p className='heading-secondary'>sides</p>
      </div>
      <div className='dinner-box-container'>
        <div className='dinner-box-container__images'>
          {images.map((image, index) => (
            <div key={index} className='dinner-box-container__images__box'>
              <img src={image} alt='yeeeeeeeee' />
            </div>
          ))}
        </div>
        <div className='dinner-box-container__items'>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <p className='sides-list-name'>
                  {item.name}
                  {item.isSpicy && (
                    <i className='fas fa-pepper-hot icon-hotpepper'></i>
                  )}
                </p>
                <p className='sides-list-price'>{item.price}</p>
                <p className='sides-list-description'>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sides;
