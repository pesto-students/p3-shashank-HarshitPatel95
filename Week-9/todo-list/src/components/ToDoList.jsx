import React from "react";

import ToDoItem from "./ToDoItem";

const ToDoList = (props) => (
  <div className="todo-list">
    {props.data.map((todo) => (
      <ToDoItem key={todo.title} item={todo} />
    ))}
  </div>
);

export default ToDoList;
