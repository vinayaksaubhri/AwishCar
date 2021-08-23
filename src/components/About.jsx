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
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const About__Heading = styled.div`
  align-self: center;
  margin-top: 1.4rem;
  font-weight: 600;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.8);
  span {
    font-weight: 300;
  }
`;
const About__Body = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 9rem;
`;
const Video = styled.div`
  background: #c4c4c4;
  height: 30rem;
  width: 50rem;
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
`;
