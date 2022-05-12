import React from "react";
import { useContext } from "react";
import Context from "./context";
import countTime from "../../utils/count-time";

const CATEGORY_COLORS = {
  backery: 'blue',
  milk: 'green',
  dry: 'orange',
};

export default function FrigeItem({productFrige}) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (productFrige.completed) {
    classes.push('done');
  }

  const color = CATEGORY_COLORS[productFrige.category];
  const nowTime = countTime(productFrige.time);

  return (
    <li className="frigeItem">
      <div style={{ backgroundColor: color }} className="sizeColor">
      </div>
      <span className={classes.join(' ')}>
        {productFrige.title}
      </span>
        <a>{
          nowTime == 0 ? (
            'Сегодня истекает срок годности') : 
            nowTime <= 0 ? 
              (`Истёк срок годности  ${-nowTime}  дня назад`):
              (`Осталось:  ${nowTime}  дней`) 
        } </a>
      <button onClick={() => removeTodo(productFrige.id)} className="button" >&times;</button>
    </li>
  );
}
