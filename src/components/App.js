import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const inputfields = {
    name: "",
    email: "",
    gender: "",
    phone: "",
    password: ""
  };
  const [formvalue, setFormValue] = useState(inputfields);
  const handlechange = (e) => {
    const { name, values } = e.target;
    setFormValue({ ...formvalue, [name]: values });
  };

  return (
    <div id="main">
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
      <select
        data-testid="gender"
        name="male"
        value={formvalue.gender}
        onChange={handlechange}
      >
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
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
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default App;
