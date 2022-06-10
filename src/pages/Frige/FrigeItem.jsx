import React from "react";
import { useContext } from "react";
import countTime from "../../utils/count-time";
import { Context } from "../../containers/LogicLayout";

const CATEGORY_COLORS = {
  backery: 'blue',
  milk: 'green',
  dry: 'orange',
};

export default function FrigeItem({productFrige}) {
  const { handleDeleteFrigeItem } = useContext(Context);

  const remove = () => {
    handleDeleteFrigeItem(productFrige.id);
  };

  console.log(productFrige)

  const color = CATEGORY_COLORS[productFrige.foodType];
  const timeLast = countTime(Number(productFrige.expires));

  return (
    <li className="frigeItem">
      <div style={{ backgroundColor: color }} className="sizeColor">
      </div>
      <span>
        {productFrige.title}
      </span>
        <a>{
          timeLast == 0 ? (
            'Сегодня истекает срок годности') : 
            timeLast <= 0 ? 
              (`Истёк срок годности  ${-timeLast}  дня назад`):
              (`Осталось:  ${timeLast}  дней`) 
        } </a>
      <button onClick={remove} className="button" >&times;</button>
    </li>
  );
}
