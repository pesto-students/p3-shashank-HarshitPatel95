import React, { useState } from "react";

const AddItemForm = (props) => {
  const [inputItem, setInputItem] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputItem !== "") {
      const toDoItem = {
        id: props.data.length + 1,
        title: inputItem,
        done: false,
      };
      props.onAddItem(toDoItem);
      setInputItem("");
    }
  };

  return (
    <div className="todo-add-form">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add Items"
          value={inputItem}
          onChange={(event) => {
            setInputItem(event.target.value);
          }}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddItemForm;
