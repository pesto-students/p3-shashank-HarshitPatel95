import React, { useState } from "react";

const AddItemForm = (props) => {
  const [inputItem, setInputItem] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputItem) {
      const toDoItem = {
        title: inputItem,
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
          placeholder="Add Item"
          value={inputItem}
          onChange={(event) => setInputItem(event.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddItemForm;
