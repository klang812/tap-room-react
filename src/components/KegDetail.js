import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg, onClickingBuy, onClickingRestock, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name}</h3>
      <p>{keg.brand}</p>
      <p>${keg.price}</p>
      <p>{keg.alcoholContent}%</p>
      <p>Pints Left: {keg.quantity}</p>
      {keg.quantity > 0 && 
        <button onClick={() => onClickingBuy(keg.id)}>Sold a pint</button>
      }
      {keg.quantity === 0 &&
        <h1>Sorry, no more beer!</h1>
      }
      <button onClick={()=> onClickingRestock(keg.id)}>Restock pints</button>
      <button onClick={()=> onClickingDelete(keg.id)}>Delete keg</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingRestock: PropTypes.func,
  onClickingBuy: PropTypes.func
};

export default KegDetail;
