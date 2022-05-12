import React from 'react'
import FrigeItem from './FrigeItem';

function FrigeList (props) {
  return (
    <ul className="frigeList">
      { props.productsFrige.map((productFrige, index) => {
        return <FrigeItem productFrige={productFrige} key={productFrige.id} index={index} />
      })}
    </ul>
  );
}

export default FrigeList;
