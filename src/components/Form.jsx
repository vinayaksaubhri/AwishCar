import { React, useState } from "react";
import styled from "styled-components";
import database from "../utils/firebase";
import { ref, set, push } from "firebase/database";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Text, setText] = useState("");
  toast.configure();

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toString();
    if (Name === "" || Email === "" || Phone === "" || Text === "") {
      toast.warn("Please fill the form completely", {
        autoClose: false,
      });
    } else if (Phone.length > 10) {
      toast.warn("Phone number can only be of 10 digit", {
        autoClose: false,
      });
    } else if (Email !== "" && !/\S+@\S+\.\S+/.test(Email)) {
      toast.warn("Email is invalid", {
        autoClose: false,
      });
    } else {
      const ContactRef = ref(database, "Contact", {
        autoClose: false,
      });
      const newContactRef = push(ContactRef);
      set(newContactRef, {
        Name,
        Email,
        Phone,
        Text,
        date,
      });

      toast.success("Form Submit", {
        autoClose: false,
      });
      setName("");
      setEmail("");
      setPhone("");
      setText("");
    }
  };

  return (
    <Form__Container>
      Contact US
      <input
        type="text"
        name="Name"
        value={Name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="Email"
        value={Email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        name="Phone"
        value={Phone}
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        name="Message"
        id="msg"
        rows="5"
        value={Text}
        placeholder="Enter Text Here..."
        onChange={(e) => setText(e.target.value)}
      />
      <Form__Button type="submit" onClick={handleSubmit}>
        Submit
      </Form__Button>
    </Form__Container>
  );
}

export default Form;
const Form__Container = styled.form`
  padding: 0px 5%.5rem;
  height: 100%;
  font-weight: 600;
  font-size: 26px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    align-self: center;
  }

  input {
    background: rgba(145, 137, 137, 0.25);
    border: 0.5px solid #ffffff;
    box-sizing: border-box;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    width: 27.5rem;
    height: 3.5rem;
    padding: 1rem;
    color: #ffffff;
    outline: none;
  }
  input::placeholder {
    color: #ffffff;
  }
  #msg {
    background: rgba(145, 137, 137, 0.25);
    border: 0.5px solid #ffffff;
    box-sizing: border-box;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    color: #ffffff;
    padding: 1rem;
    font-family: "inter";
  }
  #msg::placeholder {
    color: #ffffff;
  }
`;
const Form__Button = styled.div`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 6px;
  width: 9.8rem;
  height: 2.8rem;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  cursor: pointer;
`;
