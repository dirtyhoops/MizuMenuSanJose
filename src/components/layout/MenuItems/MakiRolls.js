import React from 'react';
import { makiRolls, vegetarianRolls } from '../../../datas/lunchItems';

const MakiRolls = (props) => {
  const { bground } = props;
  return (
    <div className={`dinner-box ${bground}`} id='maki'>
      <div className='dinner-box-header'>
        <p className='heading-secondary'>Maki Roll</p>
      </div>
      <div className='makiroll-box-container'>
        <ul>
          {makiRolls.map((item, index) => (
            <li key={index}>
              <p className='makiroll-list-name'>
                {item.name}
                {item.isSpicy && (
                  <i className='fas fa-pepper-hot icon-hotpepper'></i>
                )}
              </p>
              <p className='makiroll-list-price'>{item.price}</p>
            </li>
          ))}
        </ul>
        <ul>
          {vegetarianRolls.map((item, index) => (
            <li key={index}>
              <p className='makiroll-list-name'>
                {item.name}
                <i className='fas fa-leaf icon-leaf'></i>
              </p>
              <p className='makiroll-list-price'>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MakiRolls;
