import React, {useState} from "react";
import FrigeList from "./FrigeList";
import Context from "./context";
import AddProductForm from "./AddProductForm";
import './Frige.css';

function Frige() {
  let [productsFrige, setState] = useState([
    {id: 1, completed: false, category: 'milk', title: 'Хлеб', time: new Date()},
    {id: 2, completed: false, category: 'backery', title: 'Молоко', time: new Date()},
    {id: 3, completed: false, category: 'dry', title: 'Сахар', time: new Date()}
  ])

  const [form, setForm] = useState(true);

  function removeTodo (id) {
    setState(productsFrige.filter(productFrige => productFrige.id !== id))
  }

  function addProductForm (title, time, category) {
    setState([
      ...productsFrige,
      {
        time,
        title,
        category,
        id: Date.now(),
        completed: false
      }
    ])
  }

  function openForm () {
    setForm(false);
  }

  function closeForm (){
    setForm(true);
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1> Список продуктов</h1>
        {form ? (
          <button onClick={openForm} className="button button_Close" > + </button>
        ) : (
          <AddProductForm onClose={closeForm} onCreate={addProductForm} />
        )}
        {productsFrige.length ?  <FrigeList productsFrige={productsFrige} /> : <p>Нет продуктов</p>}
      </div>
    </Context.Provider>
  );
}

export default Frige;
