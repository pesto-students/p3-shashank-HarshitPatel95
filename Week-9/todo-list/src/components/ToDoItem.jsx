import React from "react";

const ToDoItem = (props) => {
  return (
    <div className="todo-item">
      <p>{props.item.title}</p>
    </div>
  );
};

export default ToDoItem;
