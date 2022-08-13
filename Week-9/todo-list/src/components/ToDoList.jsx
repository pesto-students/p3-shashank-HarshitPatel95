import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <div className="todo-list">
      {props.data.map((todo) => (
        <ToDoItem key={todo.id} item={todo} onDoneItem={props.onDoneItem} />
      ))}
    </div>
  );
};

export default ToDoList;
