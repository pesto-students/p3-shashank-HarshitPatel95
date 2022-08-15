import React, { useState } from "react";

import ToDoHeader from "./ToDoHeader";
import AddItemForm from "./AddItemForm";
import ToDoList from "./ToDoList";

const ToDo_Data = [
  {
    title: "Complete Assignment",
  },
  {
    title: "Week-9 lecture",
  },
  {
    title: "Pick Up Laundry",
  },
];

const ToDoContainer = () => {
  const [toDoData, setToDoData] = useState(ToDo_Data);

  const addItemHandler = (item) => setToDoData((prevItem) => [item, ...prevItem]);

  return (
    <div className="todo-div">
      <ToDoHeader />
      <AddItemForm onAddItem={addItemHandler} data={toDoData} />
      <ToDoList data={toDoData} />
    </div>
  );
};

export default ToDoContainer;
