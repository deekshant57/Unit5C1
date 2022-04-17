import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

const Todo = () => {
  const [todosList, setTododList] = useState([]);
  const getInputData = (todoText) => {
    // console.log(todoText);
    const payload = {
      title: todoText,
      status: false,
      id: nanoid(5),
    };
    setTododList([...todosList, payload]);
  };

  const handleStatus = (id) => {
    // having the id and set the status to true for that specific object
    console.log("Deleted", id);
    setTododList([
      ...todosList.map((e) => (e.id == id ? { ...e, status: !e.status } : e)),
    ]);
  };
  return (
    <div>
      <TodoInput props={getInputData}></TodoInput>

      {todosList.map((e) => (
        <TodoItem props={e} handleStatus={handleStatus}></TodoItem>
      ))}
    </div>
  );
};

export default Todo;
