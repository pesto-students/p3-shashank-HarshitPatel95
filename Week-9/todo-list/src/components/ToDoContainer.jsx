import React, { useState } from "react";
import ToDoHeader from "./ToDoHeader";
import AddItemForm from "./AddItemForm";
import ToDoList from "./ToDoList";

const ToDo_Data = [
  {
    id: 1,
    title: "Complete Assignment",
    done: false,
  },
  {
    id: 2,
    title: "Week-9 lecture",
    done: false,
  },
  {
    id: 3,
    title: "Pick Up Laundry",
    done: true,
  },
];

const ToDoContainer = () => {
  const [toDoData, setToDoData] = useState(ToDo_Data);

  const addItemHandler = (item) => {
    setToDoData((prevItem) => {
      return [...prevItem, item];
    });
  };

  const doneItemHandler = (done, id) => {
    //Query
    let temp_state = [...toDoData];
    let temp_element = { ...temp_state[id - 1] };
    temp_element.done = done;
    temp_state[id - 1] = temp_element;
    setToDoData(temp_state);

    // setToDoData(
    //   toDoData.map((index) => {
    //     if (index === id) {
    //       toDoData[index].done = done;
    //       return toDoData[index];
    //     }
    //     return toDoData[index];
    //   })
    // );
  };

  return (
    <div className="todo-div">
      <ToDoHeader />
      <AddItemForm onAddItem={addItemHandler} data={toDoData} />
      <ToDoList data={toDoData} onDoneItem={doneItemHandler} />
    </div>
  );
};

export default ToDoContainer;
