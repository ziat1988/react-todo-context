import React, { useContext } from "react";
import TodoContext from "../store/TodoContext";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  const [state] = useContext(TodoContext);
  console.log(state);
  return (
    <ul>
      {state.todos.map((todo, index) => {
        return <TodoItem key={index} todo={todo} />;
      })}
    </ul>
  );
};

export default Todos;
