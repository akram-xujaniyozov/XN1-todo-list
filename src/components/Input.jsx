import React, { useRef } from "react";
import { useTodosContext } from "../context/TodoContext";
import { addTodo } from "../store";

// 1 Controlled Components (state) vs Uncontrolled components (ref)
// 2 Two-way binding
export const Input = () => {
  // const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const { dispatch } = useTodosContext();

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    if (!inputValue.trim()) return;
    dispatch(addTodo(inputValue));

    // setInputValue("");

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-start gap-5">
      <input
        ref={inputRef}
        type="text"
        id="new-todo"
        className="border-2 border-blue-700 basis-9/12 rounded-md px-3 text-xl"
        // value={inputValue}
        // onChange={handleChange}
      />
      <button
        type="submit"
        className="basis-3/12 bg-blue-800 text-white text-center p-3 rounded-md text-xl"
      >
        Add
      </button>
    </form>
  );
};
