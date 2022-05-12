import React, {useState} from "react";
import PropTypes from "prop-types";

import getCurrentDate from '../../utils/get-current-date';

function AddProductForm({
  onCreate,
  onClose,
}){
  const [value, setValue] = useState (null);
  const [valueDate, setValueDate] = useState (getCurrentDate());
  const [valueCategory, setValueCategory] = useState (null);

  function submitHandler(event){
    event.preventDefault();

    if (!valueCategory || !valueDate || !value) {
      return;
    } 

    if(value.trim()) {
      onCreate(value, new Date(valueDate), valueCategory);
      onClose();
    }
  }

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
        <button type="submit" onClick={submitHandler} className="button_Add button" >
          Добавить продукт
        </button>
        <button onClick={onClose} className="button button_Close">
          &times;
        </button>
      </div>
    </div>
  );
}

AddProductForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default AddProductForm;
