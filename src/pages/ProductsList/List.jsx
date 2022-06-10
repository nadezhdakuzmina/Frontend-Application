import React from 'react'
import ListItem from './ListItem';

function List (props) {
  return (
    <ul className='list'>
      { props.items.map((item, index) => {
        return (
          <ListItem 
            item={item}
            key={item.id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

export default List;
