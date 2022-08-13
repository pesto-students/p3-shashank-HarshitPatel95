import React, { useState } from "react";
import ToDoHeader from "./ToDoHeader";
import AddItemForm from "./AddItemForm";
import ToDoList from "./ToDoList";

const ToDo_Data = [
  {
    id: 1,
    title: "Complete Assignment",
  },
  {
    id: 2,
    title: "Week-9 lecture",
  },
  {
    id: 3,
    title: "Pick Up Laundry",
  },
];

const ToDoContainer = () => {
  const [toDoData, setToDoData] = useState(ToDo_Data);

  const addItemHandler = (item) => {
    setToDoData((prevItem) => {
      return [item, ...prevItem];
    });
  };

  return (
    <div className="todo-div">
      <ToDoHeader />
      <AddItemForm onAddItem={addItemHandler} data={toDoData} />
      <ToDoList data={toDoData} />
    </div>
  );
};

export default ToDoContainer;
