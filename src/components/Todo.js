import React, { useContext, useRef } from "react";
import TodoContext from "../store/TodoContext";
import { SET_TODO, ADD_TODO } from "../store/TodoReducer";

const Todo = () => {
  const [state, dispatch] = useContext(TodoContext);
  const inputRef = useRef();
  console.log("todo render");
  const handleChange = (evt) => {
    dispatch({ type: SET_TODO, payload: evt.target.value });
  };

  const handleSubmit = (evt) => {
    dispatch({ type: ADD_TODO, payload: state.todoInput });
  };

  return (
    <div>
      <input ref={inputRef} onChange={handleChange} type="text" autoComplete="off" value={state.todoInput} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Todo;
