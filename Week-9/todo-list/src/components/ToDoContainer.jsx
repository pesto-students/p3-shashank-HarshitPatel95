import React, { useState } from "react";
import ToDoHeader from "./ToDoHeader";
import AddItemForm from "./AddItemForm";
import ToDoList from "./ToDoList";

const ToDo_Data = [
  {
    id: "item1",
    title: "Complete Assignment",
    done: false,
  },
  {
    id: "item2",
    title: "Pick Up Laundry",
    done: false,
  },
];

const ToDoContainer = () => {
  const [toDoData, setToDoData] = useState(ToDo_Data);

  return (
    <div className="todo-div">
      <ToDoHeader />
      <AddItemForm />
      <ToDoList data={toDoData} />
    </div>
  );
};

export default ToDoContainer;
