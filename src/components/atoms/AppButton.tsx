import React from "react";
import styled from "@emotion/styled";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const AppButton = (props: Props) => {
  return <Button {...props} />;
};

const Button = styled.button`
  font-size: 16px;
  padding: 8px 5px;
  border: none;
  background-color: dodgerblue;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: 200ms;
  box-shadow: 0 0 5px #aaa;
  transition: 300ms;
  width: 100%;

  &:hover {
    background-color: dodgerblue;
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export default AppButton;
