import React, { Fragment } from 'react';
import SpiritItem from './SpiritItem';
import {
  singlemaltwhiskey,
  rye,
  bourbon,
  rum,
  tequila,
  cognac,
  vodka,
  gin,
} from '../../../datas/drinkItems';

const Spirits = (props) => {
  const { bground } = props;
  return (
    <Fragment>
      <div className={`spirits-box ${bground}`} id='spirits'>
        <div className='spirits-box-header'>
          <p className='heading-secondary'>Spirits</p>
        </div>
        <div className='spirits-box-container'>
          <SpiritItem
            items={singlemaltwhiskey}
            header={'single malt whiskey'}
          />
          <SpiritItem items={rye} header={'rye'} />
          <SpiritItem items={bourbon} header={'bourbon'} />
          <SpiritItem items={rum} header={'rum'} />
          <SpiritItem items={tequila} header={'tequila'} />
          <SpiritItem items={cognac} header={'cognac'} />
          <SpiritItem items={vodka} header={'vodka'} />
          <SpiritItem items={gin} header={'gin'} />
        </div>
      </div>
    </Fragment>
  );
};

export default Spirits;
