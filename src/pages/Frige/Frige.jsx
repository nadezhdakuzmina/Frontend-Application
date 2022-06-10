import React, {useState, useContext, useEffect} from "react";
import FrigeList from "./FrigeList";
import AddProductForm from "./AddProductForm";
import './Frige.css';
import { Context } from "../../containers/LogicLayout";

function Frige() {

  const [form, setForm] = useState(true);
  const {frigeItems, setFrigeItems, handleGetFrigeItems} = useContext(Context);
  useEffect(() => {
    handleGetFrigeItems();
  }, []);

  function addProductForm (title, time, category) {
    setFrigeItems([
      ...frigeItems,
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
    <div className="wrapper">
      <h1> Список продуктов</h1>
      {form ? (
        <button onClick={openForm} className="button button_Close" > + </button>
      ) : (
        <AddProductForm onClose={closeForm} onCreate={addProductForm} />
      )}
      {frigeItems?.length ?  <FrigeList frigeItems={frigeItems} /> : <p>Нет продуктов</p>}
    </div>
  );
}

export default Frige;
