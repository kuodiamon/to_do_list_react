/** @format */

import Filter from "./Filter";
import TaskItem from "./TaskItem";

import styled from "styled-components";

import { useSelector } from "react-redux";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  min-width: 300px;
`;

const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  background-color: #f8f8f8;
`;

function TaskList() {
  const tasks = useSelector((store) => store.todosReducer);

  const renderItems = () => {
    let list = [];
    tasks.forEach((item, index) => {
      list.push(
        <TaskItem key={item.taskName} task={{ ...item, idx: index }} />
      );
    });
    return list;
  };
  return (
    <Wrapper>
      <Filter />
      {/* <TaskItemContainer> */}
      {/* <TaskItem />
        <TaskItem />
        <TaskItem /> */}
      {/* </TaskItemContainer> */}
      <TaskItemContainer>{renderItems()}</TaskItemContainer>
    </Wrapper>
  );
}

export default TaskList;
