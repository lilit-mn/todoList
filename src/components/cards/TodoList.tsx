import React, { useContext } from "react";
import { todoListContext } from "../../contexts/TodoListContext";
import TodoItem from "./TodoItem";

type Props = {};

const TodoList = (props: Props) => {
  const { todos } = useContext(todoListContext);
  return (
    <>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo._id} />
      ))}
    </>
  );
};

export default TodoList;
