/** @format */
import addIcon from "../assets/icon/add.png";
import styled from "styled-components";
import * as actions from "../actions/todos";

import { useDispatch } from "react-redux";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 25px auto 40px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid #333;
  width: 300px;
  font-size: 16px;
  letter-spacing: 0.05em;

  &::placeholder {
    color: #333;
  }
`;

const AddBtn = styled.button`
  padding: 0;
  border: none;
  height: 27px;
  width: 27px;
  background-color: inherit;

  img {
    cursor: pointer;
  }
`;

function AddTask() {
  const dispatch = useDispatch();

  const [newTask, setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(event.target.value);
  };

  const handleClick = (event) => {
    if (newTask === "") return; //檢查有沒有輸入任務名稱
    dispatch(actions.addTask(newTask));
    setnewTask("");
  };
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder={"Add new task ..."}
        value={newTask}
        onChange={handleChange}
      />
      <AddBtn onClick={() => handleClick()}>
        <img src={addIcon} alt="" />
      </AddBtn>
    </Wrapper>
  );
}

export default AddTask;
