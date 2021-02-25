import React from 'react';
// import crispyRice from '../../../img/../img/crispyrice.jpg';
// import takoyaki from '../../../img/takoyaki.jpg';
// import calamari from '../../../img/calamari.jpg';
// import tempura from '../../../img/tempura.jpg';
// import chickenbulgogi from '../../../img/chickenbulgogi.jpg';
// import spicyporkbulgogi from '../../../img/spicyporkbulgogi.jpg';
// import galbi from '../../../img/galbi.jpg';
// import porkdonburi from '../../../img/porkdonburi.jpg';
// import takocarpacio from '../../../img/takocarpacio.jpg';

const MenuItems = props => {
  const {
    bground,
    items,
    header,
    images,
    wrapper_id,
    bigpicture,
    handleShowDialog
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
              <img
                src={image}
                alt='nada'
                onClick={() => handleShowDialog(image)}
              />
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

export default MenuItems;
