import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import ObjectID from "bson-objectid";
import AppInput from "../atoms/AppInput";
import AppButton from "../atoms/AppButton";
import styled from "@emotion/styled";
import { Todo, todoListContext } from "../../contexts/TodoListContext";

type Props = {};

const initForm: Todo = {  
  _id: "",
  title: "",
  createAt: new Date()
};

const FormCard = (props: Props) => {
  const {todos, setTodos} = useContext(todoListContext)
  const [form, setForm] = useState<Todo>(initForm);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      ...form,
      _id: `${ObjectID()}`,
    };

    setTodos(prev => [newTodo, ...prev])
    setForm(initForm);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <AppInput
        onChange={handleFormChange}
        value={form.title}
        type={"text"}
        name="title"
        title="name"
        required
        placeholder="Read Book"
      />
      <AppInput
        onChange={handleFormChange}
        value={form.date}
        type={"date"}
        name="date"
        title="description"
        placeholder="Describe your task"
      />
      <AppButton>Save</AppButton>
    </Form>
  );
};

export default FormCard;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
