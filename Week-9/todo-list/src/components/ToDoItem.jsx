import React, { useState, useId } from "react";

const ToDoItem = (props) => {
  const [checked, setChecked] = useState(false);
  const uuid = useId();

  const handleChange = () => setChecked(!checked);

  return (
    <div className="todo-item" id={uuid}>
      <input type="checkbox" checked={checked ? "checked" : ""} onChange={handleChange} />
      <p className={`${checked ? "item-title-check" : ""}`}>{props.item.title}</p>
    </div>
  );
};

export default ToDoItem;
