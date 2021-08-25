import React from "react";
import styled from "styled-components";

function About() {
  return (
    <About__Contianer>
      <About__Heading>
        About <span>Us</span>
      </About__Heading>
      <About__Body>
        <Video></Video>
        <About__Body_Content>
          Awishcar is a company that believes in challenging the present state
          of how car being cleaned in our country.
          <br />
          We believe in thinking differently and the way we challenge the
          current situation by developing a process of cleaning the car which is
          good for environment, eco-friendly and provides employment to the
          people of India.
          <br />
          We use finest range of products suitable for cars paint and are easy
          to use.
          <br />
          <i>
            “We just happen to clean and maintain your car with total conviction
            and belief in what we do”.
          </i>
        </About__Body_Content>
      </About__Body>
    </About__Contianer>
  );
}

export default About;
const About__Contianer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const About__Heading = styled.div`
  align-self: center;
  font-weight: 600;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.8);
  span {
    font-weight: 300;
  }
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;
const About__Body = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    /* justify-content: center; */
    font-size: 14px;
  }
`;
const Video = styled.div`
  background: #c4c4c4;
  height: 30rem;
  width: 50rem;
  @media (max-width: 768px) {
    width: 30rem;
    height: 21rem;
    align-self: center;
  }
`;
const About__Body_Content = styled.div`
  font-size: 2rem;
  line-height: 2.9rem;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  width: 61rem;
  height: 30rem;
  i {
    font-weight: 200;
  }
  @media (max-width: 768px) {
    margin-top: 7rem;
    width: 85%;
    font-size: 1.4rem;
    align-self: center;
  }
`;
