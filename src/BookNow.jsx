import React from "react";
import Navbar from "./components/navbar";
import styled from "styled-components";
import { BookNowPriceList2 } from "./Static/BookNowPrice";
import Footer from "./components/Footer";
import BookNowPrice from "./components/BookNowPrice";
import { useState } from "react";
import SumitButton from "./components/SumitButton";
import database from "./utils/firebase";
import { ref, set, push } from "firebase/database";

function BookNow() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Car, setCar] = useState("Hatchback");
  const [Package, setPackage] = useState("");

  const getPackage = (Green) => {
    if (Green.Card1 === true) {
      setPackage("1_month");
    } else if (Green.Card2 === true) {
      setPackage("3_month");
    } else if (Green.Card3 === true) {
      setPackage("6_month");
    }
  };
  const HandelSubmit = () => {
    console.log(Name, Email, Phone, Address, Car, Package);
    const ContactRef = ref(database, "Package");
    const newContactRef = push(ContactRef);
    set(newContactRef, {
      Name,
      Email,
      Phone,
      Address,
      Car,
      Package,
    });
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setPackage("");
  };
  return (
    <Container>
      <Navbar BookNow />
      <Heading>
        Thanks for choosing us. Give us the details and we will contact you
        shortly.
      </Heading>
      <FormContainer>
        <InputContainer>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="Phone">Phone Number</label>
          <input
            type="tel"
            name="Phone"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            name="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="cars">Car Type:</label>
          <select
            id="cars"
            name="cars"
            value={Car}
            onChange={(e) => {
              setCar(e.target.value);
            }}
          >
            {BookNowPriceList2.map((item) => {
              return <option value={item[1]}> {item[0]} </option>;
            })}
          </select>
        </InputContainer>
      </FormContainer>
      <BookNowPrice Value={Car} getPackage={getPackage} />
      <SumitButton handleSubmit={HandelSubmit} />
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading = styled.div`
  font-size: 36px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 10rem;
  width: 90%;
  align-self: center;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const FormContainer = styled.form`
  width: 90%;
  align-self: center;
  display: flex;
  gap: 3.5em;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #6f7482;
  gap: 5px;

  input {
    border: 1px solid #cdcee4;
    box-sizing: border-box;
    border-radius: 4px;
    width: 550px;
    height: 50px;
    outline: none;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
    padding-left: 5px;
    @media (max-width: 768px) {
      width: 289px;
      height: 31px;
    }
  }
  select {
    border: 1px solid #cdcee4;
    box-sizing: border-box;
    border-radius: 4px;
    width: 550px;
    height: 50px;
    outline: none;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
    padding-left: 5px;
    @media (max-width: 768px) {
      width: 289px;
      height: 31px;
    }
  }
`;
export default BookNow;
