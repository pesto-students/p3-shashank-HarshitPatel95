import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <div className="todo-list">
      {props.data.map((todo) => (
        <ToDoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
};

export default ToDoList;
