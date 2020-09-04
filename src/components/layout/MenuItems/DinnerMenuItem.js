import React from 'react';

const DinnerMenuItem = props => {
  const {
    bground,
    items,
    header,
    images,
    wrapper_id,
    bigpicture,
    dinnerUdon,
    dinnerDonburi
  } = props;
  return (
    <div className={`dinner-box ${bground}`} id={wrapper_id}>
      <div className='dinner-box-header'>
        <p className='heading-secondary'>{header}</p>
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
                <p className='list-name'>
                  {item.name}
                  {item.isSpicy && (
                    <i className='fas fa-pepper-hot icon-hotpepper'></i>
                  )}{' '}
                  {item.isGlutenFree && <span className='icon-gf'>gf</span>}
                </p>
                <p className='list-price'>{item.price}</p>
                <p className='list-description'>{item.description}</p>
              </li>
            ))}
          </ul>
          <p className='dinner-box-container__text-header'>UDON</p>
          <ul>
            {dinnerUdon.map((item, index) => (
              <li key={index}>
                <p className='list-name'>
                  {item.name}
                  {item.isSpicy && (
                    <i className='fas fa-pepper-hot icon-hotpepper'></i>
                  )}{' '}
                  {item.isGlutenFree && <span className='icon-gf'>gf</span>}
                </p>
                <p className='list-price'>{item.price}</p>
                <p className='list-description'>{item.description}</p>
              </li>
            ))}
          </ul>
          <p className='dinner-box-container__text-header'>DONBURI</p>
          <ul>
            {dinnerDonburi.map((item, index) => (
              <li key={index}>
                <p className='list-name'>
                  {item.name}
                  {item.isSpicy && (
                    <i className='fas fa-pepper-hot icon-hotpepper'></i>
                  )}{' '}
                  {item.isGlutenFree && <span className='icon-gf'>gf</span>}
                </p>
                <p className='list-price'>{item.price}</p>
                <p className='list-description'>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {bigpicture === 'true' && (
        <div className='dinner-box-container__bigpicture'>
          <img
            src={
              'http://mizusbg.com/sanjose/wp-content/uploads/sites/3/2015/01/signature-boat-1.jpg'
            }
            alt=''
          />
        </div>
      )}
    </div>
  );
};

export default DinnerMenuItem;
