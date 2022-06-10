import React, { useState, useContext } from "react";
import { Context } from "../../containers/LogicLayout";

import getCurrentDate from '../../utils/get-current-date';

function AddProductForm({
  onClose,
}){
  const [value, setValue] = useState (null);
  const [valueDate, setValueDate] = useState (getCurrentDate());
  const [valueCategory, setValueCategory] = useState (null);

  const { handleAddFrigeItem } = useContext(Context);

  const addFrigeItem = (event) => {
    event.preventDefault();

    if (!valueCategory || !valueDate || !value) {
      return;
    } 
    if (value) {
      handleAddFrigeItem(value, new Date(valueDate).getTime(), valueCategory);
      onClose();
    }
  };

/*   function submitHandler(event){
    event.preventDefault();

    if (!valueCategory || !valueDate || !value) {
      return;
    } 

    if(value.trim()) {
      onCreate(value, new Date(valueDate), valueCategory);
      onClose();
    }
  } */

  return (
    <div className="addForm">
      <input
        className="inputAdd"
        value={value}
        onChange={ event => setValue(event.target.value)}
      />
      <div className="frigeType">
      <span>Годен до:</span>
      <input
        type="date" 
        className="inputDate" 
        value={valueDate} 
        onChange={ event => setValueDate(event.target.value)} 
      />
      <select 
        className="operation" 
        onChange={ event => setValueCategory(event.target.value)}
      >
        <option>Выберите тип</option>
        <option value="milk">milk</option>
        <option value="backery">beckary</option>
        <option value="dry">dry</option>
      </select>
      </div>
      <div className="addClose">
        <button type="submit" onClick={addFrigeItem} className="button_Add button" >
          Добавить продукт
        </button>
        <button onClick={onClose} className="button button_Close">
          &times;
        </button>
      </div>
    </div>
  );
}


export default AddProductForm;
