const SET_TODO = "SET_TODO";
const ADD_TODO = "ADD_TODO";

const initStateTodo = {
  todos: [],
  todoInput: "",
};

const TodoReducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      console.log(state);
      console.log(action.payload);

      return {
        ...state,
        todos: [...state.todos, action.payload],
        todoInput: "",
      };

    default:
      throw new Error("Invalid action type");
  }
};

export { TodoReducer, initStateTodo, SET_TODO, ADD_TODO };
