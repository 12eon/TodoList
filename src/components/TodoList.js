import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  // background: gray; 크기 확인을 위한 임시
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="과제" done={true} />
      <TodoItem text="알바" done={true} />
      <TodoItem text="진로 계획" done={false} />
      <TodoItem text="친구와 약속" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
