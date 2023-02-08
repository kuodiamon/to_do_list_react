/** @format */
import addIcon from "../assets/icon/add.png";
import styled from "styled-components";

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
  return (
    <Wrapper>
      <Input type="text" placeholder={"Add new task ..."} />
      <AddBtn>
        <img src={addIcon} alt="" />
      </AddBtn>
    </Wrapper>
  );
}

export default AddTask;
