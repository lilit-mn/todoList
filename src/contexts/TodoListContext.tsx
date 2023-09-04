import React, {
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

export type Todo = {
  _id: string;
  title: string;
  date?: string;
  completed?: boolean;
  createAt: Date;
};

type TodoContextState = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  deleteTodo: (todo_id: string) => void;
  markAsCompleted: (todo_id: string) => void;
};

export const todoListContext = createContext<TodoContextState>({
  todos: [],
  setTodos: () => {},
  deleteTodo: () => {},
  markAsCompleted: () => {},
});

const TodoListContextProvider = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const deleteTodo = (todo_id: string) => {
    setTodos((prev) => prev.filter((todo) => todo_id !== todo_id));
  };

  const markAsCompleted = (todo_id: string) => {
    const index = todos.findIndex((todo) => todo_id === todo._id);
    setTodos((prev) => [
      ...prev.slice(0, index),
      { ...prev[index], completed: !prev[index].completed },
      ...prev.slice(index + 1),
    ]);
  };
  return (
    <todoListContext.Provider
      value={{ todos, setTodos, deleteTodo, markAsCompleted }}
    >
      {props.children}
    </todoListContext.Provider>
  );
};

export default TodoListContextProvider;
