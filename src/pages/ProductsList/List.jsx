import React from 'react'
import ListItem from './ListItem';

function List (props) {
  return (
    <ul className='list'>
      { props.productsList.map((productList, index) => {
        return <ListItem 
        productList={productList} key={productList.id} index={index} onChange={props.onToggle}
        />
      })}
    </ul>
  );
}

export default List;
