import React, { useState, useContext } from "react";
import { Context } from "../../containers/LogicLayout";

function AddProduct(){
  const [value, setValue] = useState('');

  const { handleAddCartItem } = useContext(Context);

  const addCartItem = () => {
    if (value) {
      handleAddCartItem(value);
    }
  };

  return (
    <>
      <input className="inputAdd" value={value} onChange={ event => setValue(event.target.value)} />
      <button className="button button_Add" onClick={addCartItem}>Добавить продукт</button>
    </>
  )
}

export default AddProduct;
