import React, { useContext, useEffect } from "react";
import List from "./List";
import AddProduct from "./AddProductForm";

import { Context } from '../../containers/LogicLayout';

import './ProductsList.css';

function ProductsList() {
  const { handleGetCartItems, cartItems } = useContext(Context);

  useEffect(() => {
    handleGetCartItems();
  }, []);

  return (
    <div className="wrapper">
      <h1> Список покупок</h1>
      <AddProduct />
      {cartItems?.length ?  (
        <List
          items={cartItems}
        />
      ) : (
        <p>Нет продуктов</p>
      )}
    </div>
  );
}

export default ProductsList;
