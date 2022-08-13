import React, { useState, useId } from "react";

const ToDoItem = (props) => {
  const [checked, setChecked] = useState(false);
  const uuid = useId();

  const handleChange = () => setChecked(!checked);

  return (
    <div className="todo-item" id={uuid}>
      <input
        type="checkbox"
        checked={checked === true ? "checked" : ""}
        onChange={handleChange}
      />
      <p className={`${checked === true ? "item-title-check" : ""}`}>
        {props.item.title}
      </p>
    </div>
  );
};

export default ToDoItem;
