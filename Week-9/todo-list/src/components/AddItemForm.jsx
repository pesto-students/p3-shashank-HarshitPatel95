import React, { useState } from "react";

const AddItemForm = () => {
  const [inputItem, setInputItem] = useState("");

  return (
    <div className="todo-add-form">
      <form>
        <input
          type="text"
          placeholder="Add Items"
          value={inputItem}
          onChange={(event) => {
            setInputItem(event.target.value);
          }}
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default AddItemForm;
