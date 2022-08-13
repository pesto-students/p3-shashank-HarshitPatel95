import React, { useState } from "react";

const AddItemForm = () => {
  const [inputItem, setInputItem] = useState("");

  return (
    <div className="todo-add-form">
      <input
        type="text"
        placeholder="Add Items"
        value={inputItem}
        onChange={(event) => {
          setInputItem(event.target.value);
        }}
      />
      <button>ADD</button>
    </div>
  );
};

export default AddItemForm;
