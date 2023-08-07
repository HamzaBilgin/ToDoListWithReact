import React from "react";
import "./NewTaskForm.css";
import { useState } from "react";
const NewTaskForm = (props) => {
  console.log(props)
  const [taskName, settaskName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const taskNameChangeHandler = (e) => {
    const taskNameValue = e.target.value;
    if (taskNameValue.trim().length > 0) {
      setIsValid(true);
    }
    settaskName(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (taskName.trim().length === 0) {
      setIsValid(false);
      return;
    }
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
            className={`task-input ${isValid ? "valid":""}`}
            placeholder={`${isValid ? "Ürün Adı Giriniz...":"Lütfen boş bırakmayınız..."}`}
            onChange={taskNameChangeHandler}
            value={taskName}
            style={{
              backgroundColor: isValid ? "" : "red",
            }}
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
