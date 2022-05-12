import React, {useState} from "react";
import PropTypes from "prop-types";


function AddProduct({onCreate}){
  const [value, setValue] = useState ('')

  function submitHandler(event){
    event.preventDefault()

    if(value.trim()) {
      onCreate(value);
      setValue('');
    }
  }
  return (
  <form className="formAdd" onSubmit={submitHandler}>
    <input className="inputAdd" value={value} onChange={ event => setValue(event.target.value)} />
    <button type="submit" className="button button_Add">Добавить продукт</button>
  </form>
  )
}

AddProduct.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddProduct;
