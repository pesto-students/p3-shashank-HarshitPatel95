import React from "react";
import ToDoHeader from "./ToDoHeader";
import AddItemForm from "./AddItemForm";

const ToDoContainer = () => {
  return (
    <div className="todo-div">
      <ToDoHeader />
      <AddItemForm />
    </div>
  );
};

export default ToDoContainer;
