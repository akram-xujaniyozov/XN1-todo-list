import React from "react";
import { useTodosContext } from "../context/TodoContext";

import TrashBucket from "../assets/svg/TrashIcon.svg";

export const TodoItem = ({ todo }) => {
  const { handleDeleteTodos } = useTodosContext();

  return (
    <li
      className="flex 
        justify-between 
        items-center 
        px-5 py-2 
        bg-lightCyan 
        rounded-md 
        border-2 border-gray-300"
    >
      <p className="text-xl">{todo.name}</p>
      <button
        onClick={() => handleDeleteTodos(todo.id)}
        className="bg-indigo-700 p-3 rounded-md"
      >
        <img className="h-7 w-7" src={TrashBucket} alt="trash-bucket" />
      </button>
    </li>
  );
};
