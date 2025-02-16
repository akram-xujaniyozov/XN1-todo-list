const addTodo = (newTodo) => ({ type: "ADD_TODO", payload: newTodo });
const deleteTodo = (id) => ({ type: "DELETE_TODO", payload: id });

export { addTodo, deleteTodo };
