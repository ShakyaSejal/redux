import React from "react";
import TotalItems from "./TotalItems";

const TodoList = () => {
  const todos = [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
  ];
  return (
    <>
      <ul className="list-none">
        {todos.map((value)=>(
          <TotalItems
            key={value.id}
            roll={value.id}
            name={value.title}
            status={value.completed}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
