import React from "react";
import "./NewTaskForm.css";
import { useState } from "react";
const NewTaskForm = (props) => {
  const [taskName, settaskName] = useState("");
  const taskNameChangeHandler = (event) => {
    settaskName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newProductData = {
      id: props.tasks.length + 1,
      taskName,
    };

    // props.setProducts((prevState) => [...prevState, newProductData]);
    props.onSaveProduct(newProductData);
    settaskName("");
  };
  return (
    <div className="newTaskForm">
      <form className="newTaskForm--form" onSubmit={submitHandler}>
        <div className="newTaskForm-input">
          <input
            type="text"
            placeholder="Ürün Adı Giriniz..."
            onChange={taskNameChangeHandler}
            value={taskName}
          />
        </div>
        <div className="newTaskForm-button">
          <button>Görev Ekle</button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskForm;
