import React from "react";
import styled from "styled-components";

function SumitButton({ handleSubmit }) {
  return (
    <Container type="sumit" onClick={handleSubmit}>
      Sumit
    </Container>
  );
}

export default SumitButton;

const Container = styled.div`
  background: #01a164;
  border-radius: 4px;
  width: 14rem;
  height: 4.6rem;
  font-size: 1.3rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin-right: 7.6rem;
  margin-bottom: 4rem;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 4rem;
    margin-right: 3rem;
  }
`;
