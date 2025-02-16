import { createContext, useReducer, useContext } from "react";
import { todoReducer } from "../store";

const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

const useTodosContext = () => useContext(TodosContext);

export { TodosContextProvider, useTodosContext };
