import React from "react";

const ToDoItem = (props) => {
  const handleOnDone = (event) => {
    props.onDoneItem(event.target.checked, parseInt(event.target.id));
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.done === true ? "checked" : ""}
        onChange={handleOnDone}
        id={props.item.id}
      />
      <p className={`${props.item.done === true ? "item-title-check" : ""}`}>
        {props.item.title}
      </p>
    </div>
  );
};

export default ToDoItem;
