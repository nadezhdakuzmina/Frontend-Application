import React, { useContext } from "react";
import { Context } from "../../containers/LogicLayout";

export default function ListItem({
  item,
  index
}) {
  const { handleDeleteCartItem, handleChangeItemStatus} = useContext(Context);

  const remove = () => {
    handleDeleteCartItem(item.id);
  };

  const onChange = () => {
    handleChangeItemStatus(item.id, !item.isChecked);
  };

  const classes = [];

  if (item.isChecked) {
    classes.push('done');
  }

  return (
    <li className="listItem">
      <span className={classes.join(' ')}>
        <input type="checkbox"
          onChange={onChange} 
          checked={item.isChecked}
        />
        <strong>{index+1}</strong>
        &nbsp;
        {item.name}
      </span>
      <button onClick={remove}>
        &times;
      </button>
    </li>
  );     
};
