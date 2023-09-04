import React, { useContext } from "react";
import styled from "@emotion/styled";
import AppInput from "../atoms/AppInput";
import { Todo, todoListContext } from "../../contexts/TodoListContext";

const TodoItem = (props: Todo) => {
  const { deleteTodo, markAsCompleted } = useContext(todoListContext);
  return (
    <Container>
      <AppInput
        type={"checkbox"}
        onClick={() => markAsCompleted(props._id)}
        checked={props.completed}
      />
      <Heading>
        <Title>{props.title}</Title>
        <small>{props.date}</small>
      </Heading>
      <FaTrash
        onClick={() => deleteTodo(props._id)}
        style={{ cursor: "pointer" }}
        color="#999"
      />
    </Container>
  );
};

export default TodoItem;

const Container = styled.li`
  background-color: #eee;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px #ddd;
  }
  &:active {
    box-shadow: 0px 0px 5px #ccc;
  }
`;

const Heading = styled.div`
  font-weight: normal;
  letter-spacing: 0.6px;
  width: 100%;
  flex-grow: 1;
`;

const Title = styled.p``;

const FaTrash = styled.i``;
