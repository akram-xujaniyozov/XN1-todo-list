import { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const handleAddTodos = (todo) => {
    const newTodo = { name: todo, id: uuidv4() };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodos = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, handleAddTodos, handleDeleteTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

const useTodosContext = () => useContext(TodosContext);

export { TodosContextProvider, useTodosContext };
