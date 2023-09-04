import * as React from "react";
import BoxMiddleLayout from "../components/layouts/BoxMiddleLayout";
import FormCard from "../components/cards/FormCard";
import TodoListContextProvider from "./../contexts/TodoListContext";
import styled from "@emotion/styled";
import TodoList from "../components/cards/TodoList";

type Props = {};

const TodoPage = (props: Props) => {
  return (
    <BoxMiddleLayout>
      <Container>
        <TodoListContextProvider>
          <FormCard />
          <TodoList />
        </TodoListContextProvider>
      </Container>
    </BoxMiddleLayout>
  );
};

export default TodoPage;

const Container = styled.article`
  margin: 10px;
`;
