/** @format */
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.05em;
  padding: 0 20px;
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const TaskName = styled.div`
  flex-grow: 1;
  margin: 0 20px;
`;

const Button = styled.div`
  background-color: #bebebe;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  width: min-content;
  color: white;
  letter-spacing: 0.05em;
  cursor: pointer;

  &:hover {
    background-color: #F5727E;
  }
`;

function TaskItem() {
  return (
    <Wrapper>
      <CheckBox type="checkbox" />
      <TaskName>TaskName</TaskName>
      <Button>Delete</Button>
    </Wrapper>
  );
}

export default TaskItem;
