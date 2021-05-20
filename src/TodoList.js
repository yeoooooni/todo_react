import React from "react";
import styled from "styled-components";
import TodoRow from "./TodoRow";

// TodoList 출력
const TodoList = ({ todoList, handleClickRemove }) => ( // 함수형 컴포넌트
    <Container>
        {todoList.map((todo,index) => (
            <TodoRow todo = {todo} key = {index} index = {index} handleClickRemove={handleClickRemove}></TodoRow>
        ))}
    </Container>
);

const Container = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default TodoList;