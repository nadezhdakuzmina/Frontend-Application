import React, {useState} from "react";
import List from "./List";
import Context from "./context";
import AddProduct from "./AddProductForm";
import './ProductsList.css';

function ProductsList() {
  let [productsList, setState] = useState([
    {id: 1, completed: false, title: 'Хлеб'},
    {id: 2, completed: false, title: 'Молоко'},
    {id: 3, completed: false, title: 'Сахар'}
  ])
  function toggleCheck (id) {
    setState(
      productsList = productsList.map (productList => {
      if (productList.id === id) {
        productList.completed = !productList.completed;
      }
      return productList;
    })
    )
  }

  function removeTodo (id) {
    setState(productsList.filter(productList => productList.id !== id))
  } 

  function addProduct (title) {
    setState(productsList.concat([
      {
        title,
        id: Date.now (),
        completed: false
      }
    ]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
        <h1> Список покупок</h1>
        <AddProduct onCreate={addProduct} />
        {productsList.length ?  <List productsList={productsList} onToggle={toggleCheck}/> : <p>Нет продуктов</p>}
       
    </div>
    </Context.Provider>
  );
}

export default ProductsList;
