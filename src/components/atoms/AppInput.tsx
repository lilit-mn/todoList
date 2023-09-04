import React from "react";
import styled from "@emotion/styled";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const AppInput = (props: Props) => {
  return (
    <Container>
      {props.title && (
        <Title>
          {props.title} {props.required && <Star>*</Star>}
        </Title>
      )}
      <Input {...props} />
    </Container>
  );
};

export default AppInput;

const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 16px;
`;

const Star = styled.div`
  font-size: 16px;
  color: tomato;
`;
const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #eee;
  border-radius: 5px;
  &:focus {
    outline-color: dodgerblue;
    outline-width: 1px;
  }
`;
