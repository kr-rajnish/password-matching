import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  function clickMe() {
    if (value2 === value3) {
      console.log(value1 + " " + value2);
    } else {
      console.log("please enter correct password");
    }
  }
  return (
    <div className="App">
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setValue1(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setValue2(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setValue3(e.target.value)}
      />
      <br />
      <button
        onClick={clickMe}
        // disabled={
        //   value1.length === 0 || value2.length === 0 || value3.length === 0
        // }
      >
        Submit
      </button>
    </div>
  );
}
