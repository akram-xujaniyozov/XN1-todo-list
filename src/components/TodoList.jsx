import React from "react";
import { useTodosContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useTodosContext();

  // Contional rendering
  // 1 Case
  // if (todos.length === 0) {
  //   return (
  //     <p className="text-center text-xl ">
  //       There is no anything to do something!!!
  //     </p>
  //   );
  // }

  // 2 Case
  // return (
  //   todos.length > 0 && (
  //     <ul className="flex flex-col gap-3">
  //       {todos.map((todo, index) => (
  //         <TodoItem key={index} todo={todo} />
  //       ))}
  //     </ul>
  //   )
  // );

  // 3 Case
  return todos.length === 0 ? (
    <p className="text-center text-xl ">
      There is no anything to do something!!!
    </p>
  ) : (
    <ul className="flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
