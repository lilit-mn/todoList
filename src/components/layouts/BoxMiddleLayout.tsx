import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BoxMiddleLayout = (props: Props) => {
  return (
    <Background>
      <Foreground>{props.children}</Foreground>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Foreground = styled.div`
  margin-top: 50px;
  width: 380px;
  height: 600px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 5px #ddd;
`;

export default BoxMiddleLayout;
