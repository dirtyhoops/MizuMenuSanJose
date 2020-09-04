import React from 'react';

const KidsMeal = props => {
  const { bground, wrapper_id } = props;
  return (
    <div className={`bento-box ${bground}`} id={wrapper_id}>
      <div className='bento-box-header'>
        <p className='heading-secondary'>kids menu</p>
      </div>
      <div className='bento-box-subheader'>
        <p>Choice of Entree</p>
        <p>Served with rice & sweet potato fries</p>
      </div>
      <div className='bento-box-container'>
        <div className='bento-box-container__left'>
          <p className='bento-box-kids-type'>TERIYAKI</p>
          <ul>
            <li className='bento-box-li-flex'>
              <p>Chicken </p>
              <p>12.5</p>
            </li>
            <li className='bento-box-li-flex'>
              <p>Beef or Salmon</p>
              <p>15.5</p>
            </li>
          </ul>
        </div>
        <div className='bento-box-container__right'>
          <p className='bento-box-kids-type'>KATSU</p>
          <ul>
            <li className='bento-box-li-flex'>
              <p>Chicken </p>
              <p>13.5</p>
            </li>
            <li className='bento-box-li-flex'>
              <p>Pork</p>
              <p>13.5</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KidsMeal;
