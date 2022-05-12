import React from "react";
import { useContext } from "react";
import Context from "./context";

export default function ListItem({productList, index, onChange}) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (productList.completed) {
    classes.push('done');
  }

  return (
    <li className="listItem">
      <span className={classes.join(' ')}>
        <input type="checkbox"
        onChange={() => onChange(productList.id)} 
        checked={productList.completed}
        />
        <strong>{index+1}</strong>
        &nbsp;
        {productList.title}
      </span>
      <button onClick={() => removeTodo(productList.id)}>
        &times;
      </button>
    </li>
  );     
};
