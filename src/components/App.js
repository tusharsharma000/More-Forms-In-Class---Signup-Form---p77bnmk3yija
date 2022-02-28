import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const inputfields = {
    name: "",
    email: "",
    gender: "male",
    phone: "",
    password: ""
  };
  const [formvalue, setFormValue] = useState(inputfields);
  const [validate, setValidate] = useState("");
  const handlechange = (e) => {
    const { name, values } = e.target;
    setFormValue({ ...formvalue, [name]: values });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formvalue.name === "" ||
      formvalue.email === "" ||
      formvalue.password === "" ||
      formvalue.phone === "" ||
      formvalue.gender === ""
    ) {
      setValidate("All fields are mandatory");
    } else if (!formvalue.name.match(/^[a-zA-Z0-9]+$/)) {
      setValidate("Name is not alphanumeric");
    } else if (!formvalue.email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/)) {
      setValidate("Email must contain @");
    } else if (
      formvalue.gender !== "male" ||
      formvalue.gender !== "female" ||
      formvalue.gender !== "other"
    ) {
      setValidate("Please identify as male, female or others");
    } else if (!formvalue.phone.match(/^[0-9]*$/)) {
      setValidate("Phone Number must contain only numbers");
    } else if (formvalue.password.length < 6) {
      setValidate("Password must contain atleast 6 letters");
    } else {
      setValidate(`Hello {formvalue.email.split("@")[0]}`);
    }
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          data-testid="name"
          name="name"
          value={formvalue.name}
          onChange={handlechange}
        />
        Email:
        <input
          type="email"
          data-testid="email"
          name="email"
          value={formvalue.email}
          onChange={handlechange}
        />
        Gender:
        <input
          type="text"
          data-testid="gender"
          value={formvalue.gender}
          onChange={handlechange}
        />
        Phone Number:
        <input
          type="number"
          data-testid="phoneNumber"
          name="phone"
          value={formvalue.phone}
          onChange={handlechange}
        />
        Password:
        <input
          type="password"
          data-testid="password"
          name="password"
          value={formvalue.password}
          onChange={handlechange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{validate}</p>
    </div>
  );
};

export default App;
