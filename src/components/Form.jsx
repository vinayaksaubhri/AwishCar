import React from "react";
import styled from "styled-components";

function Form() {
  return (
    <Form__Container>
      Contact US
      <input type="text" name="Name" placeholder="Name" />
      <input type="email" name="Email" placeholder="Email" />
      <input type="tel" name="Phone" placeholder="Phone Number" />
      <input
        type="text"
        name="Message"
        placeholder="Type your message here..."
        rows="4"
      />
      <Form__Button>Sumit</Form__Button>
    </Form__Container>
  );
}

export default Form;
const Form__Container = styled.form`
  padding: 0px 55px;
  height: 100%;
  font-weight: 600;
  font-size: 26px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  input {
    background: rgba(145, 137, 137, 0.25);
    border: 0.5px solid #ffffff;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 12px;
    width: 275px;
    height: 35.17px;
  }
  input::placeholder {
    color: #ffffff;
    padding: 1rem;
  }
`;
const Form__Button = styled.div`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 6px;
  width: 98px;
  height: 28.14px;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;
