import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import { initStateTodo, TodoReducer } from "./TodoReducer";

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initStateTodo);
  return <TodoContext.Provider value={[state, dispatch]}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
