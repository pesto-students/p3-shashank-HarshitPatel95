import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <div className="todo-list">
      {props.data.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ToDoList;
