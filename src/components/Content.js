import React from "react";
import Todo from "./Todo";
import Todos from "./Todos";

const Content = () => {
  return (
    <div className="todos">
      <Todo />
      <Todos />
    </div>
  );
};

export default Content;
