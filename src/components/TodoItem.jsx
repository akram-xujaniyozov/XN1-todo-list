import React from "react";
import { useTodosContext } from "../context/TodoContext";
import { deleteTodo } from "../store";

import TrashBucket from "../assets/svg/TrashIcon.svg";

export const TodoItem = ({ todo }) => {
  const { dispatch } = useTodosContext();

  const handleDeleteClick = () => {
    if (window.confirm("Really, Do you want to delete this todo!!!")) {
      dispatch(deleteTodo(todo.id));
    }
  };

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
        onClick={handleDeleteClick}
        className="bg-indigo-700 p-3 rounded-md"
      >
        <img className="h-7 w-7" src={TrashBucket} alt="trash-bucket" />
      </button>
    </li>
  );
};
